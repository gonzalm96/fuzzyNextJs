'use client'

import { useEffect } from "react";

import feedStyle from "../Styles/feed.module.scss";

const FbFeed = ({ embedUrl }) => {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v23.0";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);

  useEffect(() => {
    // Ensure the Facebook SDK is loaded before parsing
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, [embedUrl]);

  return (
    <div className={feedStyle.feedContainer}>
      <h2>In the Know</h2>
      <div id="fb-root"></div>
      <div
        className="fb-page"
        data-href="https://www.facebook.com/fuzzybritchesfiber/"
        data-tabs="timeline"
        data-width="380"
        data-height="500"
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/fuzzybritchesfiber/"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/fuzzybritchesfiber/">Your Page</a>
        </blockquote>
      </div>      
    </div>
  );
}

export default FbFeed;