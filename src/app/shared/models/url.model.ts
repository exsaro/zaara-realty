// zaararealty.in/api/public/location/{All}
// zaararealty.in/api/public/location/{chennai}
// zaararealty.in/api/public/location/{chennai}/{Avadi}
// zaararealty.in/api/public/builder/{chennai}/{avadi}/{Mahindra Lifespaces}
// zaararealty.in/api/public/projects/{Chennai}/{MAHINDRA HAPPINEST}
// zaararealty.in/api/public/search/{trichy}

export class Urls {

  public static BASE_URL = `https://www.zaararealty.in/api/public/`;
  public static BUILDER_URL = `${Urls.BASE_URL}builder/`;
  public static PROJECT_URL = `${Urls.BASE_URL}projects/`;
  public static SEARCH_URL = `${Urls.BASE_URL}search/`;
  public static LOCATION_URL = `${Urls.BASE_URL}location/`;
  public static LEAD_URL = `${Urls.BASE_URL}enquiry/`;

}
