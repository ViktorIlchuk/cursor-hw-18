import styled from "styled-components";

const StyledPost = styled.div`
    display: flex;
    align-items: flex-start;
    color: white;
    margin: auto;
    background-color: rgb(14, 24, 31);
    padding: 20px;
    font-family: 'Roboto', sans-serif;
    height: 88.7vh;
        & .avatar {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        margin-right: 10px;
        }
        & .authorInfo > *{
            margin-top: 0;
            margin-right: 5px;
        }
        & .authorInfo {
            display: flex;
                & .authorName {
                    font-weight: bold;
                }
                & .active {
                    width: 15px;
                    height: 15px;
                }
                & .nickName,
                  .postDate {
                    color: grey;
                }
        }
        & .postText {
            margin: 0;
        }
        & .postImage {
            border-radius: 20px;
            width: 97%;
            margin-top: 15px;
        }
`

export default StyledPost;