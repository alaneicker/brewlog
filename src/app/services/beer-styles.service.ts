import { Injectable } from '@angular/core';

@Injectable()
export class BeerStyleService {
    get styles() {
        return [
            {
                'id': 1,
                'name': 'Classic English-Style Pale Ale'
            },
            {
                'id': 2,
                'name': 'English-Style India Pale Ale'
            },
            {
                'id': 3,
                'name': 'Ordinary Bitter'
            },
            {
                'id': 4,
                'name': 'Special Bitter or Best Bitter'
            },
            {
                'id': 5,
                'name': 'Extra Special Bitter'
            },
            {
                'id': 6,
                'name': 'English-Style Summer Ale'
            },
            {
                'id': 7,
                'name': 'Scottish-Style Light Ale'
            },
            {
                'id': 8,
                'name': 'Scottish-Style Heavy Ale'
            },
            {
                'id': 9,
                'name': 'Scottish-Style Export Ale'
            },
            {
                'id': 10,
                'name': 'English-Style Pale Mild Ale'
            },
            {
                'id': 11,
                'name': 'English-Style Dark Mild Ale'
            },
            {
                'id': 12,
                'name': 'English-Style Brown Ale'
            },
            {
                'id': 13,
                'name': 'Old Ale'
            },
            {
                'id': 14,
                'name': 'Strong Ale'
            },
            {
                'id': 15,
                'name': 'Scotch Ale'
            },
            {
                'id': 16,
                'name': 'British-Style Imperial Stout'
            },
            {
                'id': 17,
                'name': 'British-Style Barley Wine Ale'
            },
            {
                'id': 18,
                'name': 'Brown Porter'
            },
            {
                'id': 19,
                'name': 'Robust Porter'
            },
            {
                'id': 20,
                'name': 'Sweet or Cream Stout'
            },
            {
                'id': 21,
                'name': 'Oatmeal Stout'
            },
            {
                'id': 22,
                'name': 'Irish-Style Red Ale'
            },
            {
                'id': 23,
                'name': 'Classic Irish-Style Dry Stout'
            },
            {
                'id': 24,
                'name': 'Foreign (Export)-Style Stout'
            },
            {
                'id': 25,
                'name': 'American-Style Pale Ale'
            },
            {
                'id': 26,
                'name': 'Fresh \'Wet\' Hop Ale'
            },
            {
                'id': 27,
                'name': 'Pale American-Belgo-Style Ale'
            },
            {
                'id': 28,
                'name': 'Dark American-Belgo-Style Ale'
            },
            {
                'id': 29,
                'name': 'American-Style Strong Pale Ale'
            },
            {
                'id': 30,
                'name': 'American-Style India Pale Ale'
            },
            {
                'id': 31,
                'name': 'Imperial or Double India Pale Ale'
            },
            {
                'id': 32,
                'name': 'American-Style Amber/Red Ale'
            },
            {
                'id': 33,
                'name': 'Imperial Red Ale'
            },
            {
                'id': 34,
                'name': 'American-Style Barley Wine Ale'
            },
            {
                'id': 35,
                'name': 'American-Style Wheat Wine Ale'
            },
            {
                'id': 36,
                'name': 'Golden or Blonde Ale'
            },
            {
                'id': 37,
                'name': 'American-Style Brown Ale'
            },
            {
                'id': 38,
                'name': 'Smoke Porter'
            },
            {
                'id': 39,
                'name': 'Brett Beer'
            },
            {
                'id': 40,
                'name': 'American-Style Sour Ale'
            },
            {
                'id': 41,
                'name': 'American-Style Black Ale'
            },
            {
                'id': 42,
                'name': 'American-Style Stout'
            },
            {
                'id': 43,
                'name': 'American-Style Imperial Stout'
            },
            {
                'id': 44,
                'name': 'Specialty Stouts'
            },
            {
                'id': 45,
                'name': 'German-Style Kölsch / Köln-Style Kölsch'
            },
            {
                'id': 46,
                'name': 'Berliner-Style Weisse (Wheat)'
            },
            {
                'id': 47,
                'name': 'Leipzig-Style Gose'
            },
            {
                'id': 48,
                'name': 'South German-Style Hefeweizen / Hefeweissbier'
            },
            {
                'id': 49,
                'name': 'South German-Style Kristall Weizen / Kristall Weissbier'
            },
            {
                'id': 50,
                'name': 'German-Style Leichtes Weizen / Weissbier'
            },
            {
                'id': 51,
                'name': 'South German-Style Bernsteinfarbenes Weizen / Weissbier'
            },
            {
                'id': 52,
                'name': 'South German-Style Dunkel Weizen / Dunkel Weissbier'
            },
            {
                'id': 53,
                'name': 'South German-Style Weizenbock / Weissbock'
            },
            {
                'id': 54,
                'name': 'Bamberg-Style Weiss (Smoke) Rauchbier (Dunkel or Helles)'
            },
            {
                'id': 55,
                'name': 'German-Style Altbier'
            },
            {
                'id': 56,
                'name': 'Kellerbier (Cellar beer) or Zwickelbier - Ale'
            },
            {
                'id': 57,
                'name': 'Belgian-Style Flanders Oud Bruin or Oud Red Ales'
            },
            {
                'id': 58,
                'name': 'Belgian-Style Dubbel'
            },
            {
                'id': 59,
                'name': 'Belgian-Style Tripel'
            },
            {
                'id': 60,
                'name': 'Belgian-Style Quadrupel'
            },
            {
                'id': 61,
                'name': 'Belgian-Style Blonde Ale'
            },
            {
                'id': 62,
                'name': 'Belgian-Style Pale Ale'
            },
            {
                'id': 63,
                'name': 'Belgian-Style Pale Strong Ale'
            },
            {
                'id': 64,
                'name': 'Belgian-Style Dark Strong Ale'
            },
            {
                'id': 65,
                'name': 'Belgian-Style White (or Wit) / Belgian-Style Wheat'
            },
            {
                'id': 66,
                'name': 'Belgian-Style Lambic'
            },
            {
                'id': 67,
                'name': 'Belgian-Style Gueuze Lambic'
            },
            {
                'id': 68,
                'name': 'Belgian-Style Fruit Lambic'
            },
            {
                'id': 69,
                'name': 'Belgian-Style Table Beer'
            },
            {
                'id': 70,
                'name': 'Other Belgian-Style Ales'
            },
            {
                'id': 71,
                'name': 'French-Style Bière de Garde'
            },
            {
                'id': 72,
                'name': 'French & Belgian-Style Saison'
            },
            {
                'id': 73,
                'name': 'International-Style Pale Ale'
            },
            {
                'id': 74,
                'name': 'Australian-Style Pale Ale'
            },
            {
                'id': 75,
                'name': 'German-Style Pilsener'
            },
            {
                'id': 76,
                'name': 'Bohemian-Style Pilsener'
            },
            {
                'id': 77,
                'name': 'German-Style Leichtbier'
            },
            {
                'id': 78,
                'name': 'Münchner (Munich)-Style Helles'
            },
            {
                'id': 79,
                'name': 'Dortmunder / European-Style Export'
            },
            {
                'id': 80,
                'name': 'Vienna-Style Lager'
            },
            {
                'id': 81,
                'name': 'German-Style Märzen'
            },
            {
                'id': 82,
                'name': 'German-Style Oktoberfest / Wiesen (Meadow)'
            },
            {
                'id': 83,
                'name': 'European-Style Dark / Münchner Dunkel'
            },
            {
                'id': 84,
                'name': 'German-Style Schwarzbier'
            },
            {
                'id': 85,
                'name': 'Bamberg-Style Märzen Rauchbier'
            },
            {
                'id': 86,
                'name': 'Bamberg-Style Helles Rauchbier'
            },
            {
                'id': 87,
                'name': 'Bamberg-Style Bock Rauchbier'
            },
            {
                'id': 88,
                'name': 'Traditional German-Style Bock'
            },
            {
                'id': 89,
                'name': 'German-Style Heller Bock/Maibock'
            },
            {
                'id': 90,
                'name': 'German-Style Doppelbock'
            },
            {
                'id': 91,
                'name': 'German-Style Eisbock'
            },
            {
                'id': 92,
                'name': 'Kellerbier (Cellar beer) or Zwickelbier - Lager'
            },
            {
                'id': 93,
                'name': 'American-Style Lager'
            },
            {
                'id': 94,
                'name': 'American-Style Light (Low Calorie) Lager'
            },
            {
                'id': 95,
                'name': 'American-Style Low-Carbohydrate Light Lager'
            },
            {
                'id': 96,
                'name': 'American-Style Amber (Low Calorie) Lager'
            },
            {
                'id': 97,
                'name': 'American-Style Premium Lager'
            },
            {
                'id': 98,
                'name': 'American-Style Pilsener'
            },
            {
                'id': 99,
                'name': 'American-Style Ice Lager'
            },
            {
                'id': 100,
                'name': 'American-Style Malt Liquor'
            },
            {
                'id': 101,
                'name': 'American-Style Amber Lager'
            },
            {
                'id': 102,
                'name': 'American-Style Märzen / Oktoberfest'
            },
            {
                'id': 103,
                'name': 'American-Style Dark Lager'
            },
            {
                'id': 104,
                'name': 'Baltic-Style Porter'
            },
            {
                'id': 105,
                'name': 'Australasian, Latin American or Tropical-Style Light Lager'
            },
            {
                'id': 106,
                'name': 'International-Style Pilsener'
            },
            {
                'id': 107,
                'name': 'Dry Lager'
            },
            {
                'id': 108,
                'name': 'Session Beer'
            },
            {
                'id': 109,
                'name': 'American-Style Cream Ale or Lager'
            },
            {
                'id': 110,
                'name': 'California Common Beer'
            },
            {
                'id': 111,
                'name': 'Ginjo Beer or Sake-Yeast Beer'
            },
            {
                'id': 112,
                'name': 'Light American Wheat Ale or Lager with Yeast'
            },
            {
                'id': 113,
                'name': 'Light American Wheat Ale or Lager without Yeast'
            },
            {
                'id': 114,
                'name': 'Fruit Wheat Ale or Lager with or without Yeast'
            },
            {
                'id': 115,
                'name': 'Dark American Wheat Ale or Lager with Yeast'
            },
            {
                'id': 116,
                'name': 'Dark American Wheat Ale or Lager without Yeast'
            },
            {
                'id': 117,
                'name': 'Rye Ale or Lager with or without Yeast'
            },
            {
                'id': 118,
                'name': 'German-Style Rye Ale (Roggenbier) with or without Yeast'
            },
            {
                'id': 119,
                'name': 'Fruit Beer'
            },
            {
                'id': 120,
                'name': 'Field Beer'
            },
            {
                'id': 121,
                'name': 'Pumpkin Beer'
            },
            {
                'id': 122,
                'name': 'Chocolate / Cocoa-Flavored Beer'
            },
            {
                'id': 123,
                'name': 'Coffee-Flavored Beer'
            },
            {
                'id': 124,
                'name': 'Herb and Spice Beer'
            },
            {
                'id': 125,
                'name': 'Specialty Beer'
            },
            {
                'id': 126,
                'name': 'Specialty Honey Lager or Ale'
            },
            {
                'id': 127,
                'name': 'Gluten-Free Beer'
            },
            {
                'id': 128,
                'name': 'Indigenous Beer (Lager or Ale)'
            },
            {
                'id': 129,
                'name': 'Smoke Beer (Lager or Ale)'
            },
            {
                'id': 130,
                'name': 'Experimental Beer (Lager or Ale)'
            },
            {
                'id': 131,
                'name': 'Historical Beer'
            },
            {
                'id': 132,
                'name': 'Wood- and Barrel-Aged Beer'
            },
            {
                'id': 133,
                'name': 'Wood- and Barrel-Aged Pale to Amber Beer'
            },
            {
                'id': 134,
                'name': 'Wood- and Barrel-Aged Dark Beer'
            },
            {
                'id': 135,
                'name': 'Wood- and Barrel-Aged Strong Beer'
            },
            {
                'id': 136,
                'name': 'Wood- and Barrel-Aged Sour Beer'
            },
            {
                'id': 137,
                'name': 'Aged Beer (Ale or Lager)'
            },
            {
                'id': 138,
                'name': 'Other Strong Ale or Lager'
            },
            {
                'id': 139,
                'name': 'Non-Alcoholic (Beer) Malt Beverages'
            },
            {
                'id': 140,
                'name': 'Dry Mead'
            },
            {
                'id': 141,
                'name': 'Semi-Sweet Mead'
            },
            {
                'id': 142,
                'name': 'Sweet Mead'
            },
            {
                'id': 143,
                'name': 'Cyser (Apple Melomel)'
            },
            {
                'id': 144,
                'name': 'Pyment (Grape Melomel)'
            },
            {
                'id': 145,
                'name': 'Other Fruit Melomel'
            },
            {
                'id': 146,
                'name': 'Metheglin'
            },
            {
                'id': 147,
                'name': 'Braggot'
            },
            {
                'id': 148,
                'name': 'Open Category Mead'
            },
            {
                'id': 149,
                'name': 'Common Cider'
            },
            {
                'id': 150,
                'name': 'English Cider'
            },
            {
                'id': 151,
                'name': 'French Cider'
            },
            {
                'id': 152,
                'name': 'Common Perry'
            },
            {
                'id': 153,
                'name': 'Traditional Perry'
            },
            {
                'id': 154,
                'name': 'New England Cider'
            },
            {
                'id': 155,
                'name': 'Fruit Cider'
            },
            {
                'id': 156,
                'name': 'Apple Wine'
            },
            {
                'id': 157,
                'name': 'Other Specialty Cider or Perry'
            },
            {
                'id': 158,
                'name': 'American-Style Imperial Porter'
            },
            {
                'id': 159,
                'name': 'Adambier'
            },
            {
                'id': 160,
                'name': 'Grodziskie'
            },
            {
                'id': 161,
                'name': 'Flavored Malt Beverage'
            },
            {
                'id': 162,
                'name': 'Energy Enhanced Malt Beverage'
            },
            {
                'id': 163,
                'name': 'Double Red Ale'
            },
            {
                'id': 164,
                'name': 'Session India Pale Ale'
            },
            {
                'id': 165,
                'name': 'Contemporary Gose'
            },
            {
                'id': 166,
                'name': 'Dutch-Style Kuit, Kuyt or Koyt'
            },
            {
                'id': 167,
                'name': 'Belgian-style Fruit Beer'
            },
            {
                'id': 168,
                'name': 'Chili Pepper Beer'
            },
            {
                'id': 169,
                'name': 'Mixed Culture Brett Beer'
            },
            {
                'id': 170,
                'name': 'Wild Beer'
            }
        ];
    }
}
