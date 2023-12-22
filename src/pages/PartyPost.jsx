import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../firebase";

const Wrapper = styled.div`
  width: 500px;
  margin: 0 auto;
`;

const SpotifyPlayer = styled.iframe`
  width: 300px;
  height: 300px;
  border: 0;
`;

const AppleMusicPlayer = styled.iframe`
  width: 300px;
  height: 300px;
  border: 0;
`;

export const PartyPost = () => {
  const [spotifyUrl, setSpotifyUrl] = useState("");
  const [appleMusicUrl, setAppleMusicUrl] = useState("");
  const [postContent, setPostContent] = useState("");

  useEffect(() => {
    if (spotifyUrl) {
      const oembedUrl = `https://open.spotify.com/oembed/?url=${spotifyUrl}&format=json`;
      fetch(oembedUrl)
        .then((res) => res.json())
        .then((data) => {
          setPostContent(`
            <div>
              <SpotifyPlayer src={data.embed_html} />
            </div>
            <div>
              ${postContent}
            </div>
          `);
        });
    }
  }, [spotifyUrl]);

  useEffect(() => {
    if (appleMusicUrl) {
      const oembedUrl = `https://api.music.apple.com/v1/oembed/?url=${appleMusicUrl}&format=json`;
      fetch(oembedUrl)
        .then((res) => res.json())
        .then((data) => {
          setPostContent(`
            <div>
              <AppleMusicPlayer src={data.embed_html} />
            </div>
            <div>
              ${postContent}
            </div>
          `);
        });
    }
  }, [appleMusicUrl]);

  return (
    <Wrapper>
      PARTY POST!
      <input
        type="text"
        placeholder="Spotify URL을 입력하세요."
        onChange={(e) => setSpotifyUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Apple Music URL을 입력하세요."
        onChange={(e) => setAppleMusicUrl(e.target.value)}
      />
      <textarea
        placeholder="글을 작성하세요."
        onChange={(e) => setPostContent(e.target.value)}
      />
    </Wrapper>
  );
};
