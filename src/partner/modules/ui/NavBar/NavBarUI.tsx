import styledComponents from "styled-components";
import styledComponentsTS from "styled-components-ts";

export const NavBarContainer = styledComponents.div({
  position: "fixed",
  bottom: "0px",
  width: "100%",
  height: "50px",
  display: "flex",
  flexDirection: "row",
  boxShadow: "0 -1px 10px gray",
  background: "white"
});

interface INavBarProps {
  selected: boolean;
}

export const Item = styledComponentsTS<INavBarProps>(styledComponents.div)`
  width: 100%;
  height:100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background: ${(props: INavBarProps) =>
    props.selected ? "WhiteSmoke" : "transparent"};
`;

export const P = styledComponentsTS<INavBarProps>(styledComponents.p)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 44px;
  margin: 0;
  font-family: unset;
  font-weight: bold;
  color: white;
  font-size: 14px;
  color: ${(props: INavBarProps) => (props.selected ? "#E83E5D" : "gray")};
`;

export const Selector = styledComponentsTS<INavBarProps>(styledComponents.div)`
  margin: 0;
  padding: 0;
  height: 6px;
  width: 100%;
  background: ${(props: INavBarProps) =>
    props.selected
      ? "linear-gradient(to right, #E83E5D, #F8823D)"
      : "transparent"};
`;
