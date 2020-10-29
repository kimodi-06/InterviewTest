import styled from "styled-components";

export const HomeWrapper = styled.div`
  .slick-arrow {
    background-color: red;
    height: 35px;
    width: 35px;
    border-radius: 100px;
  }
  .slick-arrow:hover,
  .slick-arrow:active,
  .slick-arrow:focus {
    background-color: red !important;
  }
  .ImageSliderSize{
    width:100%;
    height:500px;
  }

  .imagehover{

    margin-top:80px;

      transform:scale(1, 1);
    transition: 1s;

    &:hover {
        transform:scale(1.2, 1.2);
    }
  }
`;
