import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLayout = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;

  background-color: rgba(220, 220, 255, 0.5);
`;

export const Header = styled.header`
  min-height: 90px;
  background: linear-gradient(
    0deg,
    rgba(231, 230, 255, 0.5021358885351015) 0%,
    rgba(63, 50, 148, 0.630987429151348) 66%,
    rgba(1, 4, 18, 0.6029762246695554) 100%
  );
`;

export const StyledMain = styled.main`
  flex: 1 1 auto;
`;

export const StyledFooter = styled.footer`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    180deg,
    rgba(231, 230, 255, 0.5021358885351015) 0%,
    rgba(63, 50, 148, 0.630987429151348) 75%,
    rgba(1, 4, 18, 0.6029762246695554) 100%
  );
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 25px 10px;
  color: black;
  text-decoration: none;

  &.active {
    color: cyan;
  }
`;

export const Container = styled.div`
  max-width: 480px;
  padding: 10px 25px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 960px;
  } ;
`;
export const ContactsContainer = styled.div`
  max-width: 720px;
  padding: 10px 25px;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    max-width: 720px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) {
    max-width: 960px;
  } ;
`;

export const HeaderContainer = styled.div`
  max-width: 480px;
  padding: 10px 25px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    max-width: 720px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 960px;
  } ;
`;

export const UserEmail = styled.span`
  color: black;
  margin-right: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const FormBtn = styled.button`
  margin: 0 auto;
`;

export const Author = styled.a`
  color: black;
  text-decoration: none;
`;

export const Welcome = styled.div`
  font-size: 40px;
  text-align: center;
`;

export const Section = styled.section`
  &:not(:first-child) {
    @media screen and (max-width: 767.9px) {
      margin-top: 12px;
    }
  }
`;

export const Title = styled.h2`
  margin-bottom: 12px;
`;

export const StyledList = styled.ul`
  margin-top: 12px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;

  font-size: 16px;
`;
