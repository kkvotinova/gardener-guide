export interface ApiMoonCalendar {
  moon: {
    growing: string;
    full: string;
    waning: string;
    new: string;
  };
  days: {
    mostFavorable: string;
    favorable: string;
    neutral: string;
    undesirable: string;
  };
}

export type ApiCalendar = Record<string, ApiMoonCalendar>;

export const MOON_CALENDAR: ApiCalendar = {
  january: {
    moon: {
      growing: '1, 2, 3, 4, 24, 25, 26, 27, 28, 29, 30, 31 января',
      full: '5, 6, 7, 8 января',
      waning: '9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 января',
      new: '21, 22, 23 января',
    },
    days: {
      mostFavorable: '3, 24, 25',
      favorable: '1, 2, 4, 5, 6, 7, 11, 16, 17, 19, 26, 29, 30, 31',
      neutral: '8, 9, 10, 12, 13, 14, 15, 18, 20, 27, 28',
      undesirable: '21, 22, 23',
    },
  },
  february: {
    moon: {
      growing: '1, 2, 3, 22, 23, 24, 25, 26, 27, 28 февраля',
      full: '4, 5, 6, 7 февраля',
      waning: '8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 февраля',
      new: '19, 20, 21 февраля',
    },
    days: {
      mostFavorable: '22',
      favorable: '1, 2, 3, 4, 7, 9, 13, 14, 17, 21, 23, 25, 26, 28',
      neutral: '5, 8, 10, 11, 12, 15, 16, 18, 24, 27',
      undesirable: '6',
    },
  },
  march: {
    moon: {
      growing: '1, 2, 3, 4, 5, 24, 25, 26, 27, 28, 29, 30, 31 марта',
      full: '6, 7, 8, 9 марта',
      waning: '10, 11, 12, 13, 14, 15, 16, 17, 18, 19 марта',
      new: '20, 21, 22, 23 марта',
    },
    days: {
      mostFavorable: '2, 29, 30',
      favorable: '1, 3, 7, 9, 13, 15, 16, 24, 25, 26, 27',
      neutral: '4, 5, 6, 8, 10, 11, 12, 14, 17, 19, 20, 21, 22, 23, 28, 31',
      undesirable: '18',
    },
  },
  april: {
    moon: {
      growing: '1, 2, 3, 4, 22, 23, 24, 25, 26, 27, 28, 29, 30 апреля',
      full: '5, 6, 7 апреля',
      waning: '8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 апреля',
      new: '19, 20, 21 апреля',
    },
    days: {
      mostFavorable: '25, 26',
      favorable: '3, 4, 5, 7, 9, 11, 12, 13, 17, 18, 22, 23, 24, 27, 30',
      neutral: '1, 2, 6, 8, 10, 14, 16, 21, 28, 29',
      undesirable: '15',
    },
  },
  may: {
    moon: {
      growing: '1, 2, 3, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31 мая',
      full: '4, 5, 6, 7 мая',
      waning: '8, 9, 10, 11, 12, 13, 14, 15, 16, 17 мая',
      new: '18, 19, 20, 21 мая',
    },
    days: {
      mostFavorable: '23, 24',
      favorable: '1, 2, 3, 4, 5, 7, 9, 10, 11, 14, 22, 25, 28, 29, 30, 31',
      neutral: '6, 8, 13, 15, 16, 17, 18, 20, 21, 27',
      undesirable: '12, 19, 26',
    },
  },
  june: {
    moon: {
      growing: '1, 2, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 июня',
      full: '3, 4, 5 июня',
      waning: '6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 июня',
      new: '17, 18, 19 июня',
    },
    days: {
      mostFavorable: '1, 20, 29',
      favorable: '2, 3, 5, 6, 7, 11, 14, 15, 21, 22, 24, 27, 28, 30',
      neutral: '4, 8, 9, 10, 12, 13, 16, 19, 23, 25, 26',
      undesirable: '17, 18',
    },
  },
  july: {
    moon: {
      growing: '1, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30 июля',
      full: '2, 3, 4, 31 июля',
      waning: '5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 июля',
      new: '16, 17, 18, 19 июля',
    },
    days: {
      mostFavorable: '26, 27',
      favorable: '1, 2, 3, 4, 7, 11, 12, 13, 18, 20, 21, 22, 23, 28, 30, 31',
      neutral: '5, 6, 8, 9, 14, 15, 16, 19, 24, 25, 29',
      undesirable: '10, 17',
    },
  },
  august: {
    moon: {
      growing: '1, 2, 3, 30, 31 августа',
      full: '4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14 августа',
      waning: '15, 16, 17, 18 августа',
      new: '19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29 августа',
    },
    days: {
      mostFavorable: '1, 22, 23, 31',
      favorable: '3, 5, 8, 9, 10, 13, 19, 20, 21, 24, 25, 26, 27, 28, 29, 30',
      neutral: '2, 4, 7, 11, 12, 14, 17, 18',
      undesirable: '6',
    },
  },
  september: {
    moon: {
      growing: '1, 28, 29, 30 сентября',
      full: '2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 сентября',
      waning: '13, 14, 15, 16 сентября',
      new: '17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27 сентября',
    },
    days: {
      mostFavorable: '19, 20, 28',
      favorable: '4, 5, 6, 9, 17, 18, 21, 23, 24, 27, 29',
      neutral: '1, 2, 7, 8, 10, 12, 15, 16, 22, 25, 26',
      undesirable: '3, 11, 13, 14, 30',
    },
  },
  october: {
    moon: {
      growing: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 31 октября',
      full: '13, 14, 15, 16 октября',
      waning: '17, 18, 19, 20, 21, 22, 23, 24, 25, 26 октября',
      new: '27, 28, 29, 30 октября',
    },
    days: {
      mostFavorable: '17, 25',
      favorable: '3, 5, 7, 11, 18, 19, 20, 21, 24, 26, 29, 31',
      neutral: '1, 2, 4, 6, 8, 10, 12, 15, 16, 22, 23, 27, 28, 30',
      undesirable: '9, 14',
    },
  },
  november: {
    moon: {
      growing: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 29, 30 ноября',
      full: '12, 13, 14 ноября',
      waning: '15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25 ноября',
      new: '26, 27, 28 ноября',
    },
    days: {
      mostFavorable: '22',
      favorable: '2, 4, 7, 14, 15, 16, 17, 18, 21, 23, 25, 26, 27, 28, 30',
      neutral: '1, 3, 6, 8, 9, 10, 11, 19, 20, 24, 29',
      undesirable: '5, 12, 13',
    },
  },
  december: {
    moon: {
      growing: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 29, 30, 31 декабря',
      full: '11, 12, 13, 14 декабря',
      waning: '15, 16, 17, 18, 19, 20, 21, 22, 23, 24 декабря',
      new: '25, 26, 27, 28 декабря',
    },
    days: {
      mostFavorable: '19, 27',
      favorable: '6, 7, 10, 14, 15, 18, 21, 23, 24, 25, 26, 28, 29',
      neutral: '1, 2, 4, 5, 8, 9, 11, 13, 16, 17, 20, 22, 31',
      undesirable: '3, 12, 30',
    },
  },
};
