# Source files, data and years

Los datos en CSV utilizan como separador de columnas una ",", y de fila un retorno de carro. El separador decimal es el "."

CSV data uses a "," as a column separator and a carriage return as a row separator. The decimal separator is the "."


Las tablas CSV utilizan en la primera columna los códigos INE de cada municipio. Ejemplo: Alicante es el 03014

The CSV tables use in the first column the INE codes of each municipality. Example: Alicante is 03014

## Densidad de extranjeros por municipios: 
- Fichero html: densidad.html
- Años: 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
- Datos: data/edadsexo/`<year>`.csv

Example data edadsexo/2019.csv (first 10 rows):
> codine,Total varones,Total varones menores de 16 años,Total varones de 16 a 64 años,Total varones de 65 y más años,Total mujeres,Total mujeres menores de 16 años,Total mujeres de 16 a 64 años,Total mujeres de 65 y más años,Total extranjeros varones,Total extranjeros varones menores de 16 años,Total extranjeros varones  de 16 a 64 años,Total extranjeros varones de 65 y más años,Total extranjeros mujeres,Total extranjeros mujeres menores de 16 años,Total extranjeros mujeres de 16 a 64 años,Total extranjeros mujeres de 65 y más años,Total población
> 03002,2357,368,1561,428,2401,380,1511,510,174,30,126,18,195,32,141,22,4758
> 03003,306,32,213,61,259,36,141,82,22,1,18,3,17,0,12,5,565
> 03004,505,67,329,109,458,58,303,97,121,9,69,43,124,9,81,34,963
> 03005,6260,1169,4254,837,6019,1163,3878,978,1299,275,912,112,1071,264,705,102,12279
> 03006,640,47,321,272,638,46,316,276,347,13,128,206,368,13,159,196,1278
> 03007,117,13,74,30,113,9,71,33,20,0,9,11,18,2,8,8,230
> 03008,93,8,52,33,80,6,38,36,2,0,1,1,2,0,0,2,173
> 03009,28866,4551,19130,5185,30128,4311,18650,7167,1967,336,1582,49,1738,289,1403,46,58994
> 03010,202,23,141,38,208,26,126,56,15,3,9,3,6,0,5,1,410
> 03011,10187,1374,6166,2647,10295,1302,6286,2707,5187,501,2788,1898,5380,460,3027,1893,20482

## Porcentaje de extranjeros por municipios: 
- Fichero html: porcentaje.html
- Años:2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
- Datos: data/edadsexo/`<year>`.csv

## Gráficos con porcentaje y sexo de extranjeros por municipios: 
- Fichero html: extranjeros.html
- Años: 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
- Datos: data/edadsexo/`<year>`.csv

## Orígenes de los extranjeros por municipios: 
- Fichero html: origenes2.html
- Años: 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019
- Datos: data/nacionalitat/nacionalitat`<year>`.csv

Example data nacionalitat2019.csv (first 10 rows)
> codine,Total Población,Españoles,Total Extranjeros,Total Europa,Total Unión Europea,Alemania,Bulgaria,Francia,Italia,Polonia,Portugal,Reino Unido,Rumanía,Total Europa No Comunitaria,Rusia,Ucrania,Total Africa,Argelia,Marruecos,Nigeria,Senegal,Total América,Argentina,Bolivia,Brasil,Colombia,Cuba,Chile,Ecuador,Paraguay,Perú,República Dominicana,Uruguay,Venezuela,Total Asia,China,Pakistán,Oceanía y Apátridas
> 03002,4758,4389,369,181,146,18,0,14,12,2,3,38,37,35,18,7,123,2,119,0,1,47,2,2,4,12,1,2,12,5,0,0,0,1,18,6,4,0
> 03003,565,526,39,38,38,2,19,0,1,0,0,13,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
> 03004,963,718,245,211,198,17,0,30,3,2,0,60,1,13,4,0,9,7,0,1,0,24,2,0,1,2,5,2,4,1,1,0,0,0,1,0,0,0
> 03005,12279,9909,2370,675,643,29,46,13,12,4,13,287,154,32,12,8,1287,2,1270,3,1,388,7,29,10,27,4,1,286,7,4,3,1,2,17,9,5,3
> 03006,1278,563,715,682,675,40,2,32,4,1,1,485,2,7,0,0,0,0,0,0,0,23,4,4,1,6,1,0,2,0,0,0,0,1,10,5,0,0
> 03007,230,192,38,33,33,0,0,0,1,0,4,19,6,0,0,0,5,1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
> 03008,173,169,4,4,4,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
> 03009,58994,55289,3705,1147,1050,12,137,24,49,24,9,50,672,97,47,25,1392,67,1253,4,22,907,45,29,68,160,47,14,298,4,45,23,7,61,256,117,119,3
> 03010,410,389,21,18,18,0,0,0,2,0,0,7,7,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0
> 03011,20482,9915,10567,9252,6663,446,124,205,184,52,38,2413,746,2589,338,196,327,143,132,1,21,598,92,18,30,117,47,19,58,16,6,29,22,58,385,170,31,5


## Evolución del nº de extranjeros (2002-2019):
- Fichero html: evolucion2.html
- Datos: data/evolucion_extranjeros_2000_2019.csv

Example data evolucion_extranjeros_2000_2019.csv (first 10 rows)
> codine,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
> 03001,179,167,214,213,229,262,286,313,318,337,348,359,238,248,309,278,279,250
> 03002,231,331,370,426,482,483,527,544,521,517,489,477,408,372,378,356,359,369
> 03003,4,28,68,59,34,52,63,61,64,68,72,38,51,46,45,42,35,39
> 03004,97,120,179,215,243,290,334,335,352,350,347,333,267,240,219,204,221,245
> 03005,567,815,1090,1468,1769,1957,2373,2402,2382,2391,2409,2429,2188,2101,2056,2080,2213,2370
> 03006,465,541,602,736,811,815,912,917,931,854,849,805,741,711,688,683,725,715
> 03007,7,9,13,19,25,35,43,47,48,45,47,47,42,30,37,36,39,38
> 03008,6,7,10,8,3,8,8,8,11,15,19,14,12,8,11,7,4,4
> 03009,1234,1905,2421,2778,2536,2871,3575,3690,3697,3572,3470,2935,2972,2964,2896,3050,3331,3705
> 03010,6,12,15,13,12,22,23,24,18,21,22,19,19,20,18,15,19,21

## Evolución del nº de extranjeros en porcentajes (2002-2019):
- Fichero html: evolucion_porcentaje.html
- Datos: data/evolucion_porcentaje.csv

Example data evolucion_porcentaje.csv (first 10 rows)
> codine,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019
> 03001,29.6,28.4,33.7,34.9,36.5,39.2,41.7,45.2,45.8,46.2,46.5,48.3,38.0,39.2,44.8,41.9,42.2,39.6
> 03002,5.4,7.4,8.2,9.3,10.2,10.1,10.9,11.3,10.8,10.7,10.2,10.0,8.6,7.9,8.0,7.6,7.6,7.8
> 03003,0.6,4.5,10.1,9.0,5.5,8.3,10.0,9.9,10.7,11.1,12.0,6.7,8.7,8.0,8.0,7.7,6.4,6.9
> 03004,15.5,18.8,24.3,26.8,29.4,30.5,31.9,31.5,32.5,31.3,31.4,31.0,27.1,25.6,23.8,22.3,23.6,25.4
> 03005,6.1,8.5,10.9,14.0,16.3,17.6,20.4,20.5,20.2,20.1,20.2,20.3,18.6,17.8,17.5,17.6,18.4,19.3
> 03006,43.0,47.0,49.5,54.4,57.2,58.4,60.8,60.8,61.1,59.6,59.2,57.5,54.9,54.2,53.3,53.5,55.9,55.9
> 03007,4.5,5.5,7.3,10.6,12.9,16.2,18.4,20.6,20.9,19.5,20.2,19.5,17.6,13.9,16.7,15.7,17.0,16.5
> 03008,2.4,2.9,4.1,3.5,1.4,3.7,3.8,3.9,5.5,7.8,9.3,7.0,6.3,4.3,5.7,3.8,2.2,2.3
> 03009,2.0,3.2,4.0,4.6,4.2,4.7,5.8,6.0,6.0,5.8,5.7,4.9,5.0,5.0,4.9,5.2,5.6,6.3
> 03010,1.5,2.9,3.5,3.0,2.8,5.1,5.5,5.8,4.3,5.0,5.3,4.6,4.5,4.9,4.5,3.7,4.7,5.1

## Extranjeros por grandes grupos de edad: 
- Fichero html: piramide.html
- Años: 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
- Datos: data/edadsexo/`<year>`.csv


## Nacidos en el extranjero: 
- Fichero html: nacido.html
2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
- Datos: data/nascuda_estranger/nascuda_estranger`<year>`.csv

Example data nascuda_estranger2019.csv (first 10 rows)
> codine,Total Población,Nacidos en España,Nacidos en el Extranjero,Total Europa,Total Unión > Europea,Alemania,Bulgaria,Francia,Italia,Polonia,Portugal,Reino Unido,Rumanía,Total Europa No Comunitaria,Rusia,Ucrania,Total África,Argelia,Marruecos,Nigeria,Senegal,Total América,Argentina,Bolivia,Brasil,Colombia,Cuba,Chile,Ecuador,Paraguay,Perú,República Dominicana,Uruguay,Venezuela,Total Asia,China,Pakistán,Total Oceanía
> 03002,4758,4321,437,188,153,19,0,28,8,2,3,39,33,35,17,6,122,3,114,0,1,104,9,4,6,23,2,4,29,8,0,0,3,2,23,5,4,0
> 03003,565,526,39,37,37,2,18,0,1,0,0,13,2,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
> 03004,963,683,280,201,188,18,0,27,1,2,1,56,1,13,5,0,17,10,4,1,0,57,12,0,3,5,6,2,13,1,2,1,3,1,5,2,1,0
> 03005,12279,9854,2425,720,673,31,39,84,5,4,9,276,143,47,14,8,1059,9,1035,3,1,625,16,38,11,45,5,6,462,7,7,1,7,4,21,10,5,0
> 03006,1278,548,730,661,654,38,1,29,3,1,1,474,2,7,0,0,19,13,2,0,0,37,8,5,1,7,2,0,7,0,0,0,0,2,13,5,0,0
> 03007,230,192,38,31,31,0,0,0,1,0,3,20,4,0,0,0,5,1,4,0,0,2,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0
> 03008,173,167,6,4,4,0,0,2,0,0,0,2,0,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
> 03009,58994,54490,4504,1266,1154,35,133,194,35,22,9,53,596,112,54,24,1344,95,1157,5,24,1620,111,48,88,243,80,22,631,5,74,51,23,99,268,115,112,6
> 03010,410,384,26,21,21,0,0,4,2,0,0,7,6,0,0,0,2,0,1,1,0,2,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0
