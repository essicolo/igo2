// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
import { AppEnvironmentOptions } from './environnement.interface';

export const environment: AppEnvironmentOptions = {
  production: false,
  igo: {
    app: {
      forceCoordsNA: true,
      install: {
        enabled: false,
        promote: false
      },
      pwa: {
        enabled: false
      },
      offline: {
        enable: true
      }
    },
    auth: {
      url: '/apis/users',
      tokenKey: 'id_token_igo',
      allowAnonymous: true,
      trustHosts: ['geoegl.msp.gouv.qc.ca', 'testgeoegl.msp.gouv.qc.ca'],
      hostsByKey: [
        {
          domainRegFilters: '(https://|http://)?(.*domain.com)(.*)',
          keyProperty: 'key',
          keyValue: '123456'
        }
      ]
    },
    storage: {
      url: '/apis/igo2/user/igo',
      key: 'igo'
    },
    /*context: {
      url: '/apis/igo2',
      defaultContextUri: '5'
    },*/
    layer: {
      group: {
        enable: true,
        canCreate: true,
        canRename: true,
        maxHierarchyLevel: 4
      }
    },
    catalog: {
      sources: [
        {
          id: 'Image Arcgis Rest',
          title: 'Image Arcgis Rest',
          externalProvider: true,
          url: 'https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer',
          type: 'imagearcgisrest',
          sourceOptions: {
            queryable: true
          }
        },
        {
          id: 'Gououvert',
          title: 'Gouvouvert',
          url: '/apis/ws/igo_gouvouvert.fcgi'
        },
        {
          id: 'glace',
          title: 'Carte de glace',
          url: '/apis/ws/radarsat.fcgi',
          showLegend: true
        },
        {
          id: 'baselayerWMTS',
          title: 'Fonds / Baselayers',
          url: '/carto/wmts',
          type: 'wmts',
          matrixSet: 'EPSG_3857',
          version: '1.3.0'
        },
        {
          id: 'fusion_catalog',
          title: '(composite catalog) fusion catalog',
          url: '',
          composite: [
            {
              id: 'tq_swtq',
              url: 'https://ws.mapserver.transports.gouv.qc.ca/swtq'
            },
            {
              id: 'rn_wmts',
              url: 'https://servicesmatriciels.mern.gouv.qc.ca/erdas-iws/ogc/wmts/Cartes_Images',
              type: 'wmts',
              setCrossOriginAnonymous: true,
              matrixSet: 'EPSG_3857',
              version: '1.0.0'
            }
          ]
        },
        {
          id: 'forced_properties',
          title: 'Forced properties catalog (layer name and abstract)',
          url: '',
          composite: [
            {
              id: 'forcedProperties_wmts',
              url: 'https://servicesmatriciels.mern.gouv.qc.ca/erdas-iws/ogc/wmts/Cartes_Images',
              type: 'wmts',
              setCrossOriginAnonymous: true,
              matrixSet: 'EPSG_3857',
              version: '1.0.0',
              forcedProperties: [
                {
                  metadataAbstract: 'Nouvel abstract',
                  layerName: 'BDTQ-20K_Allegee',
                  title: 'Nouveau nom et abstract pour cette couche WMTS'
                }
              ]
            },
            {
              id: 'forcedProperties_wms',
              url: 'https://ws.mapserver.transports.gouv.qc.ca/swtq',
              type: 'wms',
              forcedProperties: [
                {
                  layerName: '*',
                  //metadataUrlAll: "https://quebec.ca/",
                  metadataAbstractAll: 'New WMS abstract to all layers'
                },
                {
                  layerName: 'etablissement_mtq',
                  title:
                    'Nouveau nom pour cette couche WMS et nouvel url pour toutes les couches',
                  //metadataAbstract: "New WMS Abstract",
                  metadataUrl: 'https://www.donneesquebec.ca/'
                }
              ]
            },
            {
              id: 'forcedProperties_arcgisrest',
              url: 'https://gisp.dfo-mpo.gc.ca/arcgis/rest/services/FGP/Seafloor_SubstratBenthique/MapServer',
              externalProvider: true,
              type: 'arcgisrest',
              forcedProperties: [
                {
                  layerName: 'Sediment substrate / Substrat sédimentaire',
                  title:
                    'Nouveau nom et nouvel url pour cette couche ArcGIS REST',
                  metadataUrl: 'https://www.donneesquebec.ca/'
                },
                {
                  layerName: '*',
                  //metadataUrlAll: "https://quebec.ca/",
                  metadataAbstractAll: 'New arcgisrest abstract to all layers'
                }
              ]
            }
          ]
        },
        {
          id: 'group_impose',
          title:
            '(composite catalog) group imposed and unique layer title for same source',
          url: '',
          composite: [
            {
              id: 'tq_swtq',
              url: 'https://ws.mapserver.transports.gouv.qc.ca/swtq',
              regFilters: ['zpegt'],
              groupImpose: { id: 'zpegt', title: 'zpegt' }
            },
            {
              id: 'Gououvert',
              url: 'https://geoegl.msp.gouv.qc.ca/apis/ws/igo_gouvouvert.fcgi',
              regFilters: ['zpegt'],
              groupImpose: { id: 'zpegt', title: 'zpegt' }
            },
            {
              id: 'Gououvert',
              url: 'https://geoegl.msp.gouv.qc.ca/apis/ws/igo_gouvouvert.fcgi',
              regFilters: ['zpegt'],
              groupImpose: { id: 'zpegt', title: 'zpegt' }
            },
            {
              id: 'rn_wmts',
              url: 'https://servicesmatriciels.mern.gouv.qc.ca/erdas-iws/ogc/wmts/Cartes_Images',
              type: 'wmts',
              setCrossOriginAnonymous: true,
              matrixSet: 'EPSG_3857',
              version: '1.0.0',
              groupImpose: {
                id: 'cartetopo',
                title: 'Carte topo échelle 1/20 000'
              }
            }
          ]
        },
        {
          id: 'tag_layernametitle',
          title: '(composite catalog) tag source on same layer title',
          url: '',
          composite: [
            {
              id: 'tq_swtq',
              url: 'https://ws.mapserver.transports.gouv.qc.ca/swtq',
              regFilters: ['limtn_charg'],
              groupImpose: {
                id: 'mix_swtq_gouv',
                title: 'mix same name layer'
              }
            },
            {
              id: 'Gououvert',
              url: 'https://geoegl.msp.gouv.qc.ca/apis/ws/igo_gouvouvert.fcgi',
              regFilters: ['limtn_charg'],
              groupImpose: {
                id: 'mix_swtq_gouv',
                title: 'mix same name layer'
              }
            }
          ]
        }
      ]
    },
    depot: {
      url: '/apis/depot'
    },
    dom: [
      {
        id: 1,
        name: 'test-dom',
        values: [
          { id: 'Radar photo fixe', value: 'Radar photo fixe' },
          { id: 'Radar photo mobile', value: 'Radar photo mobile' }
        ]
      },
      {
        id: 1,
        name: 'dom_test',
        url: 'https://ws.mapserver.transports.gouv.qc.ca/applicatif?service=WFS&request=GetFeature&version=2.0.0&outputformat=dom&typenames=dom&dom=dom_test'
      }
    ],
    language: {
      prefix: './locale/'
    },
    interactiveTour: {
      tourInMobile: true,
      pathToConfigFile: './config/interactiveTour.json'
    },
    importExport: {
      importWithStyle: false,
      url: '/apis/ogre',
      configFileToGeoDBService: './data/geoDataToIDB.json',
      clientSideFileSizeMaxMb: 32,
      allowToStoreLayer: true
    },
    searchSources: {
      workspace: {
        available: true,
        enabled: true
      },
      nominatim: {
        available: false
      },
      storedqueries: {
        available: false
      },
      icherche: {
        searchUrl: '/apis/icherche',
        order: 2,
        params: {
          limit: '5'
        }
      },
      coordinatesreverse: {
        showInPointerSummary: true
      },
      icherchereverse: {
        showInPointerSummary: true,
        searchUrl: '/apis/terrapi',
        order: 3,
        enabled: true
      },
      ilayer: {
        searchUrl: '/apis/icherche/layers',
        order: 4,
        params: {
          limit: '5'
        }
      },
      cadastre: {
        enabled: false
      }
    },
    projections: [
      {
        code: 'EPSG:32198',
        alias: 'Quebec Lambert',
        def: '+proj=lcc +lat_1=60 +lat_2=46 +lat_0=44 +lon_0=-68.5 +x_0=0 +y_0=0 +ellps=GRS80 \
          +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
        extent: [-799574, 45802, 891595.4, 1849567.5]
      },
      {
        code: 'EPSG:3798',
        alias: 'MTQ Lambert',
        def: '+proj=lcc +lat_1=50 +lat_2=46 +lat_0=44 +lon_0=-70 +x_0=800000 +y_0=0 \
          +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs',
        extent: [31796.5834, 158846.2231, 1813323.4284, 2141241.0978]
      }
    ],
    searchOverlayStyle: {
      base: {
        markerColor: '#5ed0fb', // marker fill
        markerOpacity: 0.8, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#a7e7ff', // marker contour
        fillColor: '#5ed0fb', // poly
        fillOpacity: 0.2, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#5ed0fb', // line and poly
        strokeOpacity: 0.7, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 2 // line and poly
      },
      focus: {
        markerColor: '#5ed0fb', // marker fill
        markerOpacity: 1, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#DFF7FF', // marker contour
        fillColor: '#5ed0fb', // poly
        fillOpacity: 0.3, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#5ed0fb', // line and poly
        strokeOpacity: 1, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 2 // line and poly
      },
      selection: {
        markerColor: '#00a1de', // marker fill
        markerOpacity: 1, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#ffffff', // marker contour
        fillColor: '#00a1de', // poly
        fillOpacity: 0.3, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#5ed0fb', // line and poly
        strokeOpacity: 1, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 2 // line and poly
      }
    },
    queryOverlayStyle: {
      base: {
        markerColor: '#5ed0fb', // marker fill
        markerOpacity: 0.8, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#a7e7ff', // marker contour
        fillColor: '#5ed0fb', // poly
        fillOpacity: 0.2, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#5ed0fb', // line and poly
        strokeOpacity: 0.7, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 2 // line and poly
      },
      focus: {
        markerColor: '#5ed0fb', // marker fill
        markerOpacity: 1, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#DFF7FF', // marker contour
        fillColor: '#5ed0fb', // poly
        fillOpacity: 0.3, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#5ed0fb', // line and poly
        strokeOpacity: 1, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 2 // line and poly
      },
      selection: {
        markerColor: '#00a1de', // marker fill
        markerOpacity: 1, // marker opacity not applied if a rgba markerColor is provided
        markerOutlineColor: '#ffffff', // marker contour
        fillColor: '#00a1de', // poly
        fillOpacity: 0.3, // poly fill opacity not applied if a rgba fillColor is provided
        strokeColor: '#5ed0fb', // line and poly
        strokeOpacity: 1, // line and poly not applied if a rgba strokeColor is provided
        strokeWidth: 2 // line and poly
      }
    }
  }
};
