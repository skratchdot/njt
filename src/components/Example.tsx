import React, { memo } from "react";
import styled from "styled-components";
import ExternalLink from "./ExternalLink";
import ClickableCode from "./ClickableCode";

const Remark = styled.span`
  white-space: nowrap;
`

const LinkRow = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Example: React.FunctionComponent<{
  children?: never;
  onToClick?: (text: string) => void;
  remark: string;
  to: string;
  url: string;
}> = ({ onToClick, remark, to, url }) => {
  const handleCodeClick = () => {
    onToClick?.(to);
  };

  return (
    <p>
      <span>
        <ClickableCode onClick={handleCodeClick}>njt {to}</ClickableCode> <Remark>(
        {remark})</Remark>
      </span>
      <LinkRow>
        🐸 → <ExternalLink href={url} />
      </LinkRow>
    </p>
  );
};

export default memo(Example);
