import styled from "styled-components";

export const Block = styled.div`
  img {
    user-select: none;
    -webkit-user-drag: none;
  }
  .head-image {
    width: 100%;
  }
  section {
    border: 0.1px solid transparent;
  }
  .line {
    width: 100%;
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #d9d9d9;
    padding-top: 15px;
    margin-block: 30px;
  }
  .first {
    width: 100%;
    background-color: #121212;
    color: #fff;
    padding: 50px 70px;
    img {
      display: flex;
      margin: 80px auto;
    }
    .box {
      width: 50%;
      position: relative;
      left: 50%;
      margin-top: 100px;
      .content {
        display: flex;
        gap: 30px;
        flex-direction: column;
        p {
          text-align: end;
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;
        }
      }
      hr {
        border: none;
        height: 1px;
        background-color: #fff;
        margin-block: 35px;
      }
    }
  }
  .second {
    width: 100%;
    padding: 50px 70px;
    img {
      display: flex;
      margin: 80px auto;
    }
  }
  .third {
    width: 100%;
    padding: 50px 70px;
    background: url(${require("./assets/bg-image-1.png")}) no-repeat #121212;
    .images {
      padding: 100px;
      .box {
        width: 100%;
        display: flex;
      }
      .box:nth-child(1) {
        justify-content: start;
        align-items: start;
        img:nth-child(2) {
          margin: 50px;
        }
      }
      .box:nth-child(2) {
        justify-content: end;
        align-items: end;
        img:nth-child(1) {
          margin: 50px;
        }
      }
    }
    .line {
      p {
        color: #fff;
      }
    }
    .image {
      display: flex;
      margin: 150px auto;
    }
  }
  .fourth {
    background-color: #121212;
    padding: 50px 70px;
    .images {
      padding-block: 70px;
      display: flex;
      justify-content: space-between;
      .image {
        transform: translateY(50%);
      }
      .box {
        width: 100%;
        display: flex;
      }
      .box:nth-child(1) {
        justify-content: start;
        align-items: start;
        img:nth-child(2) {
          margin: 50px;
        }
      }
    }
    .line {
      color: #fff;
    }
  }
  .fifth {
    background-color: #121212;
    padding: 50px 70px;
    .line {
      color: #fff;
    }
    .blog {
      margin-block: 50px;
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      justify-content: space-between;
      .box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 50px;
        position: relative;
        h1 {
          text-transform: uppercase;
          color: #fff;
          font-size: 50px;
          margin-top: 65px;
        }
        div {
          width: 430px;
          p {
            display: flex;
            justify-content: space-between;
            color: #606060;
            margin-bottom: 20px;
          }
          img {
            margin-inline: 10px;
          }
        }
      }
    }
    .img {
      width: 100%;
    }
  }
  .sixth {
    padding: 50px 70px;
    .images {
      display: flex;
      justify-content: space-between;
      margin-block: 50px;
      align-items: start;
      padding-top: 50px;
    }
    .image {
      display: flex;
      margin: 150px auto;
    }
  }
  .seventh {
    background-color: #121212;
    padding: 50px 70px;
    .line {
      color: #fff;
    }
    .images {
      display: flex;
      justify-content: end;
      margin-block: 50px;
      gap: 50px;
      align-items: start;
      padding-top: 50px;
    }
  }
  .eighth {
    padding: 50px 70px;
    background: url(${require("./assets/bg-image-3.png")}) no-repeat;
    .line {
      p {
        color: #fff;
      }
    }
    .image {
      display: flex;
      margin: auto;
      margin-top: 100px;
    }
  }
  .nineth {
    background-color: #121212;
    padding: 50px 70px;
    .line {
      color: #fff;
    }
    .images {
      display: flex;
      justify-content: end;
      margin-block: 50px;
      gap: 50px;
      align-items: start;
      padding-top: 50px;
    }
    h1 {
      font-size: 55px;
      color: #fff;
      text-transform: uppercase;
      text-align: center;
      margin-block: 150px;
    }
  }
  @media screen and (max-width: 700px) {
  }
`;
