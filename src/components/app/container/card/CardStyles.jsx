import styled from "styled-components";

export const CompactCardContainer = styled.div`
  display: flex;
  flex: 1;
  height: 7rem !important;
  border-radius: 0.7rem;
  color: white;
  padding: 1rem;
  position: relative;
  cursor: pointer;
  :hover {
    box-shadow: none !important;
  }
`;
export const RadialBar = styled.div`
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;
  .CircularProgressbar {
    width: 4rem !important;
    overflow: visible;
  }
  .CircularProgressbar-path {
    stroke: white !important;
    stroke-width: 12px !important;
    filter: drop-shadow(2px 4px 6px white);
  }
  .CircularProgressbar-trail {
    display: none;
  }
  .CircularProgressbar-text {
    fill: white !important;
  }
  span {
    font-size: 17px;
    font-weight: bold;
  }
`;
export const Detail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  span:nth-child(2) {
    font-size: 22px;
    font-weight: bold;
  }
  span:nth-child(3) {
    font-size: 12px;
  }
`;
export const ExpandedCardContainer = styled.div`
  position: absolute;
  width: 60%;
  height: 70vh;
  z-index: 9;
  left: 13rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;
  span:nth-of-type(1) {
    color: white;
    font-size: 26px;
    font-weight: bold;
    text-shadow: 0px 0px 15px white;
  }
  span:nth-of-type(2) {
    color: rgb(236, 236, 236);
    font-size: 15px;
  }
  @media screen and (max-width: 1200px) {
    top: 2rem;
    height: 45vh;
    left: 6rem;
  }

  @media screen and (max-width: 768px) {
    top: 8rem;
    height: 50%;
    left: 25px;
    width: 80%;
  }
`;
export const ChartContainer = styled.div`
  width: 70%;
`;