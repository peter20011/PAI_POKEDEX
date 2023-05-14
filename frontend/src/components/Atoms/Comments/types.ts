import styled from "styled-components";

export const CommentSectionContainer = styled.div`
    background: ${(props) => props.theme.colors.neutral[1]};
    padding: 20px;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    word-wrap: break-word;
    justift-content:center;
    h2 {
        text-align: center;
        font-size: 28px;
        margin-bottom: 20px;
    }

    button {
        margin: 10px auto;
        display: block;
        margin-bottom:10px;
      }

    .comments-toggle {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-bottom: 20px;
        font-size: 24px;

        svg {
            margin-right: 10px;
            font-size: 50px;
        }
    }

    .comments-section {
        margin-top: 30px;
        justify-content: center; /* Updated property to center the comments section */
        align-items: center;
        .comment {
            display: flex;
            flex-direction: column;
            background-color: white;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 20px;
            text-align: center;

            .comment-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 10px;

                .author {
                    font-weight: bold;
                }

                .timestamp {
                    font-size: 14px;
                    color: gray;
                }
            }

            .comment-body {
                font-size: 16px;
                line-height: 1.5;
            }
        }
    }

    textarea {
        width: 50%;
        height: 50px;
        resize: none;
        background-color: rgb(15, 23, 42);
        color: white;
        border: 1px solid white;
        padding: 10px;
        margin: 0 26%;
        
        &:focus {
            outline: none;
            border: 2px solid white;
        }
    }

    @media (max-width: 768px) {
        .comment {
            font-size: 14px;
            line-height: 1.3;

            .comment-header {
                flex-direction: column;
                align-items: flex-start;

                .author {
                    margin-bottom: 5px;
                }
            }

        }
    }
`;

export const UserComment = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin: 5px 0;
`;