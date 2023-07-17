import React from "react";
import styled from "styled-components";

const LinkSet = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.li`
  list-style: none;
  color: #ffffff;
`;

function Links() {
  return (
    <>
      <LinkSet>
        <Link>1</Link>
        <Link>2</Link>
        <Link>3</Link>
        <Link>4</Link>
      </LinkSet>
    </>
  );
}

export default Links;
