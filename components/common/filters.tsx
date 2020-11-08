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
    year: string,
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
  const isSuccessfulLaunchObj = [
    {
      label: 'true',
      isChecked: false,
    },
    {
      label: 'false',
      isChecked: false,
    },
  ];

  const [launchYear, setLaunchYear] = React.useState(obj);
  const [year, setYear] = React.useState('');
  const [isSuccessfulLaunch, setIsSuccessfulLaunch] = React.useState(false);
  const [isSuccessfulLanding, setIsSuccessfulLanding] = React.useState(false);

  const handleOnClick = (id) => {
    const selectedLaunchYear = launchYear.map((item) => {
      if (id === item.year) {
        item.isChecked = !item.isChecked;

        return item;
      } else {
        item.isChecked = false;
        return item;
      }
    });

    setLaunchYear(selectedLaunchYear);
    if (year === id) {
      setYear('');
      selected('', isSuccessfulLaunch, isSuccessfulLanding);
    } else {
      setYear(id);
      selected(id, isSuccessfulLaunch, isSuccessfulLanding);
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
          {launchYear.map((item) => {
            return (
              <Button
                isActive={item.isChecked}
                onClick={() => handleOnClick(item.year)}
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
        <Flex justifyContent="space-between" padding="9px 0px" flexWrap="wrap">
          <Button
            isActive={isSuccessfulLaunch}
            onClick={() => {
              setIsSuccessfulLaunch(true);
              selected(year, true, isSuccessfulLanding);
            }}
          >
            <Text fontSize="h6" fontWeight="regular" stringColor="#26341F">
              true
            </Text>
          </Button>
          <Button
            isActive={!isSuccessfulLaunch}
            onClick={() => {
              setIsSuccessfulLaunch(false);
              selected(year, false, isSuccessfulLanding);
            }}
          >
            <Text fontSize="h6" fontWeight="regular" stringColor="#26341F">
              false
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
        <Flex justifyContent="space-between" padding="9px 0px" flexWrap="wrap">
          <Button
            isActive={isSuccessfulLanding}
            onClick={() => {
              setIsSuccessfulLanding(true);
              selected(year, isSuccessfulLaunch, true);
            }}
          >
            <Text fontSize="h6" fontWeight="regular" stringColor="#26341F">
              true
            </Text>
          </Button>
          <Button
            isActive={!isSuccessfulLanding}
            onClick={() => {
              setIsSuccessfulLanding(false);
              selected(year, isSuccessfulLaunch, false);
            }}
          >
            <Text fontSize="h6" fontWeight="regular" stringColor="#26341F">
              false
            </Text>
          </Button>
        </Flex>
      </Card>
    </FilterStyled>
  );
};

export default Filters;
