import React from 'react';
import Styled from 'styled-components';
import Card from './../Card';
import Flex from './../Flex';
import Text from './../Typography';
import Button from './../Button';

const FilterStyled = Styled.div`
@media (max-width: 699px) {
  width: 100%;
  max-width: 100%;
}
width: 20%;
max-width: 200px;
`;
export interface FilterProps {
  selected: (
    year: any,
    isSuccessfulLaunch: any,
    isSuccessfulLanding: any
  ) => void;
}
const Filters: React.FC<FilterProps> = ({ selected }: FilterProps) => {
  const obj = [
    {
      year: '2005',
      isChecked: false,
    },
    {
      year: '2006',
      isChecked: false,
    },
    {
      year: '2007',
      isChecked: false,
    },
    {
      year: '2008',
      isChecked: false,
    },
    {
      year: '2009',
      isChecked: false,
    },
    {
      year: '2010',
      isChecked: false,
    },
    {
      year: '2011',
      isChecked: false,
    },
    {
      year: '2012',
      isChecked: false,
    },
    {
      year: '2013',
      isChecked: false,
    },
    {
      year: '2014',
      isChecked: false,
    },
    {
      year: '2015',
      isChecked: false,
    },
    {
      year: '2016',
      isChecked: false,
    },
    {
      year: '2017',
      isChecked: false,
    },
    {
      year: '2018',
      isChecked: false,
    },
    {
      year: '2019',
      isChecked: false,
    },
    {
      year: '2020',
      isChecked: false,
    },
  ];

  const [launchYear, setLaunchYear] = React.useState(obj);
  const [selectedYear, setSelectedYear] = React.useState('');
  const [isSuccessfulLaunch, setIsSuccessfulLaunch] = React.useState(false);
  const [isSuccessfulLanding, setIsSuccessfulLanding] = React.useState(false);

  const handleOnClick = (year: React.SetStateAction<string>) => {
    const selectedLaunchYear = launchYear.map((item) => {
      if (year === item.year) {
        item.isChecked = !item.isChecked;

        return item;
      } else {
        item.isChecked = false;
        return item;
      }
    });

    setLaunchYear(selectedLaunchYear);

    if (selectedYear === year) {
      setSelectedYear('');
      selected('', isSuccessfulLaunch, isSuccessfulLanding);
    } else {
      setSelectedYear(year);
      selected(year, isSuccessfulLaunch, isSuccessfulLanding);
    }
  };

  return (
    <FilterStyled>
      <Card background="#FFFFFF">
        <Text fontSize="h5" fontWeight="bold" stringColor="#141414">
          Filters
        </Text>
        <Card
          borderBottom="1px solid #E0E0E0"
          padding="5px 0"
          width="85%"
          margin="0 auto"
        >
          <Text
            fontSize="normal"
            fontWeight="semiBold"
            stringColor="#343434"
            textAlign="center"
          >
            Launch Year
          </Text>
        </Card>
        <Flex justifyContent="space-between" padding="9px 0px" flexWrap="wrap">
          {launchYear.map((item, index) => {
            return (
              <Button
                isActive={item.isChecked}
                onClick={() => {
                  handleOnClick(item.year);
                }}
                key={index}
              >
                <Text fontSize="h6" fontWeight="regular" stringColor="#26341F">
                  {item.year}
                </Text>
              </Button>
            );
          })}
        </Flex>
        <Card
          borderBottom="1px solid #E0E0E0"
          padding="5px 0"
          width="85%"
          margin="0 auto"
        >
          <Text
            fontSize="normal"
            fontWeight="semiBold"
            stringColor="#343434"
            textAlign="center"
          >
            Successful Launch
          </Text>
        </Card>
        <Flex flexWrap="wrap" padding="0px 0px 9px 0px">
          <Button
            isActive={isSuccessfulLaunch}
            onClick={() => {
              setIsSuccessfulLaunch(true);
              selected(selectedYear, true, isSuccessfulLanding);
            }}
            margin="9px 22px 0px 0px"
            width="66px"
          >
            <Text
              fontSize="h6"
              fontWeight="regular"
              stringColor="#26341F"
              textAlign="center"
            >
              True
            </Text>
          </Button>
          <Button
            isActive={!isSuccessfulLaunch}
            onClick={() => {
              setIsSuccessfulLaunch(false);
              selected(selectedYear, false, isSuccessfulLanding);
            }}
            margin="9px 0px 0px"
            width="66px"
          >
            <Text
              fontSize="h6"
              fontWeight="regular"
              stringColor="#26341F"
              textAlign="center"
            >
              False
            </Text>
          </Button>
        </Flex>
        <Card
          borderBottom="1px solid #E0E0E0"
          padding="5px 0"
          width="85%"
          margin="0 auto"
        >
          <Text
            fontSize="normal"
            fontWeight="semiBold"
            stringColor="#343434"
            textAlign="center"
          >
            Successful Landing
          </Text>
        </Card>
        <Flex flexWrap="wrap" padding="9px 0px 0px">
          <Button
            isActive={isSuccessfulLanding}
            onClick={() => {
              setIsSuccessfulLanding(true);
              selected(selectedYear, isSuccessfulLaunch, true);
            }}
            margin="9px 22px 0px 0px"
            width="66px"
          >
            <Text
              fontSize="h6"
              fontWeight="regular"
              stringColor="#26341F"
              textAlign="center"
            >
              True
            </Text>
          </Button>
          <Button
            isActive={!isSuccessfulLanding}
            onClick={() => {
              setIsSuccessfulLanding(false);
              selected(selectedYear, isSuccessfulLaunch, false);
            }}
            margin="9px 0px 0px"
            width="66px"
          >
            <Text
              fontSize="h6"
              fontWeight="regular"
              stringColor="#26341F"
              textAlign="center"
            >
              False
            </Text>
          </Button>
        </Flex>
      </Card>
    </FilterStyled>
  );
};

export default Filters;
