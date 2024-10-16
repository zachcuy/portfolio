import React from "react";
import styled from "styled-components";

const LinkSet = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
  position: fixed;
  bottom: 0px;
  right: 3vw;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Email = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 999;
  position: fixed;
  bottom: 0px;
  left: 3vw;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Link = styled.li`
  list-style: none;
  fill: var(--slate-400);
  color: #ffffff;
  height: 1.5rem;
  width: 1.5rem;
  padding-bottom: 20px;
  font-size: 0;

  &:hover {
    fill: var(--slate-200);
  }
`;

function Links() {
  return (
    <>
      <LinkSet>
        <Link>
          <a
            href="https://www.linkedin.com/in/zachuy/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="inherit"
              aria-hidden="true"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
        </Link>
        <Link>
          <a
            href="https://github.com/zachcuy"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="inherit"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
        </Link>
      </LinkSet>
      {/* <Email>zachary.cromwell.uy@gmail.com</Email> */}
    </>
  );
}

export default Links;
