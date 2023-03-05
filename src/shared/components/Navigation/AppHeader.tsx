/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useRootStore, useMobile, useCreateRoutingCallback } from "#shared/hooks";
import { useHistory } from 'react-router-dom' ;
import useIsSticky from "#shared/hooks/useIsSticky";
import { checkHasToken } from "#utils/shared";
import { StyledNavWrapper, FixedNavWrapper } from "./Navigation.styled";
import MobileNavMenu from "./components/MobileNavMenu";
import MobileNavBar from "./components/MobileNavigation";
import DesktopNavWrapper from "./components/DesktopNavigation";
import { pagesWithAnimationList } from "./constants";
import { chooseClassName, hideForLogin } from "./utils";
import { DepositEvent } from "#screens/deposit/RootDepositPage";
import { getStatus } from "#models/FetchStatus";
import MobileRightMenu from "./components/MobileRightMenu";
import { NavLink, LinkHtml, SubNavLinks, SubNavLinksDiv } from "#shared/ui";
import { NAVIGATION_SUB_LINKS } from "./NavLinksData";
import styled from 'styled-components' ;
import arrowRight from "./assets/arrow-right.svg";

interface AppHeaderProps {
    hideForLogin: boolean;
}
export const AppHeader: React.FC<AppHeaderProps> = observer(() => {
    const sub_link_descriptions = [
        'Democratizing Fine Wine Investing',
        'How can we help you?',
        "The Cellar"
    ] ;

    const  [openSubLinks, setOpenSubLink] = useState(false) ;

    const navigate = useHistory() ;
    const store = useRootStore();
    const { pathname } = useLocation();
    const routeToDeposit = useCreateRoutingCallback("/deposit", { refresh: true, posthogId: DepositEvent.AddFunds });

    const routetoInvite = useCreateRoutingCallback("/invite");
    const routeToSignup = useCreateRoutingCallback("/signup", { refresh: true });

    const [mobileNavMenu, setMobileNavMenu] = React.useState(false);

    const toggleMobileNavMenu: (override: any) => void = (override) => {
        if (typeof override === "boolean") {
            return setMobileNavMenu(override);
        }
        return setMobileNavMenu(!mobileNavMenu);
    };

    const [rightMobileMenu, setRightMobileMenu] = React.useState(false);
    const toggleRightMobileMenu = () => {
        setRightMobileMenu(!rightMobileMenu);
    };

    const isMobile = useMobile(1180);
    const isOnboarding = useMemo(() => pathname.includes("personalize"), [pathname]);
    const isNewUserABTest = useMemo(() => pathname.includes("new-user"), [pathname]);
    const isAddFunds = useMemo(() => pathname.includes("deposit"), [pathname]);

    const authenticated = store.auth.isAuthenticated || checkHasToken();
    const isExchangeRedirect = authenticated && (pathname === "" || pathname === "/");
    const { isSticky, topOffset } = useIsSticky({
        offset: 60,
        skipOffset: 0,
    });

    const height = authenticated ? "74px" : "90px";
    const heightMobile = authenticated ? "48px" : "80px";

    const navHeight = authenticated ? "74px" : "90px";
    const navHeightMobile = authenticated ? "48px" : "80px";

    const { classNameHeader, logoType } = chooseClassName({ authenticated, isMobile, pathname, isSticky });

    const hideHeader = hideForLogin(pathname);

    const pagesWithAnimationListFiltered = React.useMemo(() => {
        if (authenticated) {
            return pagesWithAnimationList.slice(0, pagesWithAnimationList.length - 1);
        }

        return pagesWithAnimationList;
    }, [authenticated]);

    const pagesWithAnimation = pagesWithAnimationListFiltered.includes(pathname);
    const isDone = getStatus(store.cellar.totalsEntity).isDone();
    const shouldRibbonAnimate = isDone && store.cellar.totalsEntity?.data?.planLevel !== "starter";

    return (
        <>
            {isMobile && !hideHeader && (
                <MobileNavMenu
                    open={mobileNavMenu}
                    toggleMobileNavMenu={toggleMobileNavMenu}
                    authenticated={authenticated}
                />
            )}
            {isMobile && !hideHeader && (
                <MobileRightMenu open={rightMobileMenu} toggleRightMobileMenu={toggleRightMobileMenu} />
            )}
            {!hideHeader && !isExchangeRedirect && (
                <StyledNavWrapper height={isMobile ? navHeightMobile : navHeight} className={classNameHeader}>
                    <FixedNavWrapper sticky={isSticky}>
                        {isMobile ? (
                            <MobileNavBar
                                className={classNameHeader}
                                {...{
                                    heightMobile,
                                    routetoInvite,
                                    toggleMobileNavMenu,
                                    toggleRightMobileMenu,
                                    classNameHeader,
                                    isOnboarding,
                                    logoType,
                                    isSticky: isSticky || (authenticated && !pagesWithAnimation),
                                    pathname,
                                    isAddFunds,
                                    authenticated,
                                    routeToDeposit,
                                    isNewUserABTest,
                                    routeToSignup,
                                    shouldRibbonAnimate,
                                }}
                            />
                        ) : (
                            <>
                                <DesktopNavWrapper
                                    {...{
                                        classNameHeader,
                                        isOnboarding,
                                        logoType,
                                        isSticky,
                                        height,
                                        isAddFunds,
                                        authenticated,
                                        pagesWithAnimation,
                                        isNewUserABTest,
                                        setOpenSubLink
                                    }}
                                />
                                <SubNavLinksDiv
                                    top={document.getElementsByClassName('_xto_')[(isSticky && document.getElementsByClassName('_xto_').length !== 1) ? 1 : 0]?.getBoundingClientRect().bottom}
                                    left={document.getElementsByClassName('_xto_')[(isSticky && document.getElementsByClassName('_xto_').length !== 1) ? 1 : 0]?.getBoundingClientRect().left}
                                    onMouseOver={() => setOpenSubLink(true)}
                                    onMouseOut={() => setOpenSubLink(false)}
                                    isHidden={!openSubLinks}
                                >
                                    <SubNavLinks 
                                        top={document.getElementsByClassName('_xto_')[(isSticky && document.getElementsByClassName('_xto_').length !== 1) ? 1 : 0]?.getBoundingClientRect().bottom}
                                        left={document.getElementsByClassName('_xto_')[(isSticky && document.getElementsByClassName('_xto_').length !== 1) ? 1 : 0]?.getBoundingClientRect().left}
                                    >
                                        {
                                            NAVIGATION_SUB_LINKS.map((item, index) => (
                                                <LinkItemDiv key={index}
                                                    onClick={() => {
                                                        setOpenSubLink(false) ;
                                                        navigate.push(item.to) ;
                                                    }}
                                                >
                                                    <div>
                                                        <LinkLabelDiv>
                                                            {item.label}
                                                        </LinkLabelDiv>
                                                        <LinkDescriptionDiv>
                                                            {sub_link_descriptions[index]}
                                                        </LinkDescriptionDiv>
                                                    </div>
                                                    <div>
                                                        <img src={arrowRight} />
                                                    </div>
                                                </LinkItemDiv>
                                            ))
                                        }
                                    </SubNavLinks>
                                </SubNavLinksDiv>
                            </>
                        )}
                    </FixedNavWrapper>
                </StyledNavWrapper>
            )}
        </>
    );
});

const LinkItemDiv = styled.div`
    padding-top : 15px ;
    padding-bottom : 15px ;
    padding-left : 5px;
    padding-right : 5px;
    cursor : pointer ;
    border-bottom : 1px solid #EEEEEE;

    display : flex ;
    justify-content : space-between;
    align-items : center;
`

const LinkDescriptionDiv = styled.div`
    font-family : VinovestMedium ;
    font-size : 14px; 
    padding-top : 3px;
`
const LinkLabelDiv = styled.div`
    font-size : 20px;
    font-family : RoslindaleDisplayCondensed ;
`
