import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";

interface ITextLabelProps {
  bold?: boolean;
}

export const TextLabel = styledComponentsTS<ITextLabelProps>(styledComponents.h1)`
  font-family: Roboto;
  font-weight: ${(props: ITextLabelProps) => (props.bold ? "bold" : "normal")};
  font-Size: 14px;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25rem;
  letter-spacing: normal;
  color: #515354;
  align-content: center;
  margin: 0.125rem 0px 0.625rem
`;

const BaseIcon = styledComponents.img({
  width: "1.5rem",
  height: "1.5rem",
  objectFit: "contain",
});

export const NormalIcon = styledComponents(BaseIcon)`
  margin: 0 1.125rem 0.5rem 1.5rem;
`;

export const NavIcon = styledComponents(BaseIcon)`
  margin-top: 1rem;
  margin-right: 1rem; 
`;

export const ProfileCardContainer = styledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f2f2f2;
  height: calc(100vh - 9rem);
`;
// The height must be -8rem

export const ProfileCard = styledComponents.div({
  display: "flex",
  flexDirection: "column",
  width: "343px",
  height: "253px",
  borderRadius: "0.25rem",
  background: "white",
  margin: "-1rem auto 0",
  boxShadow: "0 2px 4px 0 rgba(0, 0, 0, 0.3)",
});

export const NavIconContainer = styledComponents.div({
  display: "flex",
  height: "2.5rem",
  flexDirection: "row",
  justifyContent: "flex-end",
});

export const UserProfileImgContainer = styledComponents.div({
  display: "flex",
  boxSizing: "border-box",
  height: "5rem",
  width: "5rem",
  margin: "0px auto 1.625rem",
  borderRadius: "50%",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const UserProfileImg = styledComponents.img({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const UserInfoContainer = styledComponents.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

export const UserInfoItem = styledComponents.div({
  display: "flex",
  flexDirection: "row",
});
