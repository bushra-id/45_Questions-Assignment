
function describ_city(city:string, country:string = 'default country.'){

    console.log(`${city} is  located in ${country}`);
}

describ_city('Karachi','Pakistan');
// Output : Karachi is  located in Pakistan

describ_city('Tokyo','Japan');
// Output : Tokyo is  located in Japan

describ_city('Paris') 
// Output : Paris is  located in default country