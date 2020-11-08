import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Flex from '../components/Flex';
import Text from '../components/Typography';
import Filters from '../components/common/filters';
import Detail from '../components/common/detail';
import Spinner from './../components/Spinner';
import axios from 'axios';

const DetailStyled = styled.div`
  @media (max-width: 699px) {
    width: 100%;
    margin: 8px 0px;
    > div {
      padding: 0px;
      > div > div {
        margin: 8px 0px 0px 0px;
      }
    }
  }
  width: calc(100% - 200px);
  > div > div:nth-child(4n) {
    margin: 0px 0px 5px 0px;
  }
`;

const PageStyled = styled.div`
  @media (max-width: 699px) {
    > div {
      flex-direction: column;
    }
  }
  @media (min-width: 1440px) {
    margin: 0 auto;
    max-width: 1440px;
  }
`;
export default function Home() {
  const [detail, setDetail] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [selectedDetail, setSelectedDetail] = React.useState({
    year: '',
    isSuccessfulLaunch: false,
    isSuccessfulLanding: false,
  });

  const searchDetail = async (
    launchSuccess: boolean,
    landSuccess: boolean,
    year: string
  ) => {
    setIsLoading(true);
    try {
      const { data } = await axios({
        url: `https://api.spacexdata.com/v3/launches?limit=100&launch_success=${
          launchSuccess ? launchSuccess : ''
        }&land_success=${landSuccess ? landSuccess : ''}&launch_year=${year}`,
        method: 'get',
      });
      setDetail(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  React.useEffect(() => {
    searchDetail(
      selectedDetail.isSuccessfulLaunch,
      selectedDetail.isSuccessfulLanding,
      selectedDetail.year
    );
  }, [selectedDetail]);
  return (
    <PageStyled>
      <Head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="description" content="pwa spaceproject application" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000" />
        <link rel="apple-touch-icon" href="/example.png" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="pwa spaceproject application" />
        <meta
          property="og:description"
          content="pwa spaceproject application"
        />
        <meta property="og:site_name" content="pwa spaceproject application" />
      </Head>
      <Text
        fontSize="h4"
        fontWeight="bold"
        padding="22px"
        stringColor="#191919"
      >
        SpaceEx Lauch Program
      </Text>
      <Flex padding="9px" alignItem="flex-start">
        <Filters
          selected={(year, isSuccessfulLaunch, isSuccessfulLanding) => {
            setSelectedDetail({
              year,
              isSuccessfulLaunch,
              isSuccessfulLanding,
            });
          }}
        />
        {!isLoading ? (
          <DetailStyled>
            <Flex alignItem="stretch" padding="0px 0px 0px 8px" flexWrap="wrap">
              {detail ? (
                <>
                  {detail.map((item, index) => {
                    return <Detail detail={item} key={index} />;
                  })}
                </>
              ) : null}
            </Flex>
          </DetailStyled>
        ) : (
          <Flex justifyContent="center" padding="42px 0px 0px 0px" width="80%">
            <Spinner type="primary" />
          </Flex>
        )}
      </Flex>
    </PageStyled>
  );
}
