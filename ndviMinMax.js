var roi = ee.FeatureCollection("projects/ee-learning-rahi/assets/BGD_adm3");
var upzla = roi.filter(ee.Filter.eq("NAME_3", "Maulvibazar S."))
Map.centerObject(upzla,10)
Map.addLayer(upzla,{},"Maulvibazar S.")

var s2 = ee.ImageCollection('LANDSAT/LC09/C02/T1_L2')
          .filterBounds(upzla)
          .filterDate('2022-01-01', '2022-12-31')
          .filter(ee.Filter.lt("CLOUD_COVER",10))
          //.first()
print(s2)
function calNDVI(image){
  var ndvi = image.normalizedDifference(["SR_B5","SR_B4"]).rename("NDVI")
  return ndvi
}
var ndviCollection = s2.map(calNDVI)
print(ndviCollection)
/*var ndvi = s2.normalizedDifference(["SR_B5","SR_B4"]).rename("NDVI")
print("NDVI", ndvi)*/
var ndvi2 = ndviCollection.first()
var vizParam = {
  min: -1,
  max: 1,
  palette: ["blue","cyan","lime","yellow","green",]
}
Map.addLayer(ndvi2.clip(upzla),vizParam,"NDVI")

var stat = ndvi2.reduceRegion({
  reducer: ee.Reducer.minMax(),
  geometry: upzla,
  scale: 10
})
print(stat)