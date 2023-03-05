import styled from "styled-components";
import { I18nNavLink } from "#localization/localizedRouter.tsx";

const activeClassName = "active";

const styles = `
    text-transform: uppercase;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    margin: 0 40px 0 0;
    text-align: center;
    color: inherit;
    cursor: pointer;
    text-decoration: none;
    position: relative;
`;

export const StyledNavLink = styled(I18nNavLink).attrs({ activeClassName })`
    ${styles};
    font-family: ${(p) => (p.authenticated ? "VinovestMedium" : "VinovestMono")};
    font-size: ${(p) => (p.authenticated ? "16px" : "14px")};
    color: ${(p) => (p.isTrading ? "#a86d37" : "#242e35")};
    padding-left: ${(p) => (p.isTrading ? "26px" : "0")};
    border-left: ${(p) => (p.isTrading ? "1px solid #242E35" : "0")};

    &.login {
        &:after {
            width : 50% !important ;
        }
    }

    &.${activeClassName} {
        color: ${(p) => (p.authenticated ? "#a86d37" : "#242e35")};

        &:after {
            position: absolute;
            left: ${(p) => (p.isTrading ? "70%" : "50%")};
            transform: translateX(-50%);
            content: "";
            display: ${(p) => (p.authenticated ? "none" : "block")};
            margin: 0 auto;
            width: 26px;
            border-bottom: 2px solid ${({ theme }) => theme.colors.mainAccentBlue};
            padding-bottom: 5px;

            width : 100%;
        }
        &.transparent {
            &:after {
                border-bottom: 2px solid #efddc7;
            }
        }

        &.light {
            &:after {
                border-bottom: 2px solid #242e35;
            }
        }

        &.green {
            &:after {
                border-bottom: 2px solid #513011;
            }
        }

        &.blue {
            &:after {
                border-bottom: 2px solid #3c400c;
            }
        }

        &.darkBlue {
            &:after {
                border-bottom: 2px solid #efddc7;
                width : 100%;
            }
        }
    }
`;

export const LinkHtml = styled.a`
    ${styles};
`;

export const SubNavLinks = styled.div`
    width : 300px ;

    background : white ;

    position : relative ;

    border-radius : 10px;
    padding : 10px;

    &:after {
        position : absolute ;
        height : 20px;
        width : 20px ;

        content : " " ;
        
        top : -10px;
        left : 25px;
        transform : rotate(45deg) ;

        background : white ;

    }
`
export const SubNavLinksDiv = styled.div`
    padding-top : 50px ;

    z-index : 15;

    display : ${props => props.isHidden ? "none" : 'block'} ;

    top : ${props => props.top}px ;
    left : ${props => props.left - 30}px ;
    position : fixed ;
`