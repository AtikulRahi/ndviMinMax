First I filtered out Moulvibazar sadar upazila from administrative border shape file. Then from lansat 9 imagery I filtered by date('2022-01-01', '2022-12-31'), upazila boundary and cloud cover. After that called a function to calculate NDVI for every image in the filterd out landsat 9 imagery. Then we call a image from the new collection of image and visualize it in new layer. Lastly using reduceRegion we can see the min & max value of NDVI.

[NDVI Moulvibazar Sadar Upazila min and max value Image](https://github.com/AtikulRahi/ndviMinMax/blob/main/minMaxMoulviBazarNDVI.JPG)

[NDVI Moulvibazar Sadar Upazila min and max value Code](https://github.com/AtikulRahi/ndviMinMax/blob/main/ndviMinMax.js)

[NDVI Moulvibazar Sadar Upazila GEE min and max value Code link](https://code.earthengine.google.com/09fbddd4a6704c8ac8fdee1c38e6ee63)
