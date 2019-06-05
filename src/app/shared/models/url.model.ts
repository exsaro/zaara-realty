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
  public static LEAD_URL = `${Urls.BASE_URL}enquiry`;

  public static ADMIN_LOGIN = `${Urls.BASE_URL}admin/login`;
  public static ADMIN_ADD_BUILDER = `${Urls.BASE_URL}admin/addbuilder`;
  public static ADMIN_EDIT_BUILDER = `${Urls.BASE_URL}admin/editbuilder`;
  public static ADMIN_UPDATE_BUILDER = `${Urls.BASE_URL}admin/updatebuilder`;
  public static ADMIN_LIST_BUILDER = `${Urls.BASE_URL}admin/listbuilders`;
  public static ADMIN_DELETE_BUILDER = `${Urls.BASE_URL}admin/deletebuilder`;

}
