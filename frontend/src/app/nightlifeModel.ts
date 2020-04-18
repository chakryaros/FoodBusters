export class Nightlife {
    attending_count: Number;
    category: String;
    cost: Number;
    cost_max: Number;
    description: String;
    event_site_url : String;
    id: String;
    image_url: String;
    interested_count: Number;
    is_canceled: Boolean;
    is_official: Boolean;
    latitude: Number;
    longitude: Number;
    name: String;
    tickets_url: String;
    time_end: String;
    time_start: String;
    location:{
        address1: String;
        address2: String;
        address3: String;
        city: String;
        zip_code: String;
        country: String;
        state: String;
        display_address: Object;
        cross_streets: String;
      
    };
    business_id: String;
}