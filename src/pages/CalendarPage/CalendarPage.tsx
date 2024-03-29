import { useSearchParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {
  StyledMoonWrapper,
  StyledMoonImage,
  StyledMoon,
  StyledDay,
  StyledContentWrapper,
  StyledIconButton,
} from '@/pages/CalendarPage/CalendarPageStyled';

import SideBar from '@/components/SideBar';

import {
  bgColors,
  dayLabels,
  Months,
  moonLabels,
  moonPhasePositions,
  textColors,
  translateMonth,
} from '@/resources/constants/calendar';

import { MOON_CALENDAR } from '@/api/calendar';

const CalendarPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const currentMonth = searchParams.get('month');
  const data = MOON_CALENDAR[currentMonth || 'january'];

  useEffect(() => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    setSearchParams({ month: Months[currentMonth].value }, { replace: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderMoons = useMemo(() => {
    const values = Object.values(data.moon);

    return values.map((a, i) => {
      return (
        <StyledMoon key={a} spacing={2}>
          <StyledMoonImage $position={moonPhasePositions[i]} />
          <Typography sx={{ fontWeight: '500' }}>{moonLabels[i]}</Typography>
          <Typography textAlign='center' lineHeight='1.25'>
            {a}
          </Typography>
        </StyledMoon>
      );
    });
  }, [data.moon]);

  const renderDays = useMemo(() => {
    const values = Object.values(data.days);

    return values.map((a, i) => {
      return (
        <StyledDay key={a} $bgColor={bgColors[i]}>
          <Typography sx={{ fontWeight: '500', mr: 2 }} color={textColors[i]}>
            {dayLabels[i]} дни:
          </Typography>
          <Typography>{a}</Typography>
        </StyledDay>
      );
    });
  }, [data.days]);

  return (
    <>
      <Stack justifyContent='space-between' direction='row' sx={{ mb: 6 }} alignItems='center'>
        <Typography variant='h5'>Лунный календарь садовода на 2023 год</Typography>

        <StyledIconButton size='large' onClick={() => setIsOpen(true)}>
          <MenuIcon />
        </StyledIconButton>
      </Stack>

      <StyledContentWrapper>
        <SideBar isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <Stack direction='column'>
          <Typography variant='h6'>Фазы луны в {translateMonth(currentMonth)}</Typography>

          <StyledMoonWrapper>{renderMoons}</StyledMoonWrapper>

          <Stack direction='column' spacing={2.5}>
            {renderDays}
          </Stack>
        </Stack>
      </StyledContentWrapper>
    </>
  );
};

export default CalendarPage;
