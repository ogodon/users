import { User, Gender } from '../../users/types/user';

export const user:User = {
	"gender": Gender.male,
	"name": {
		"title": "Mr",
		"first": "Cristobal",
		"last": "Parra"
	},
	"location": {
		"street": {
			"number": 330,
			"name": "Avenida del Planetario"
		},
		"city": "Murcia",
		"state": "Comunidad Valenciana",
		"country": "Spain",
		"postcode": 45059,
		"coordinates": {
			"latitude": "-18.0193",
			"longitude": "-151.3645"
		},
		"timezone": {
			"offset": "+4:00",
			"description": "Abu Dhabi, Muscat, Baku, Tbilisi"
		}
	},
	"email": "cristobal.parra@example.com",
	"login": {
		"uuid": "3aa03886-86cb-4d9c-af28-bf8504ce83f5",
		"username": "blackleopard747",
		"password": "will",
		"salt": "HzXR2MWA",
		"md5": "0fbb5cfd155f895a51577f534b738a0c",
		"sha1": "72dded413fc7f77bedd721d20e03dee28f3b23a4",
		"sha256": "0bd3b771fc90a32bf9ac68255ccf05b9b5c39fe26ee9a5f7ac75ae7f89f08223"
	},
	"dob": {
		"date": "1996-01-16T01:27:41.298Z",
		"age": 26
	},
	"registered": {
		"date": "2011-05-01T05:48:15.788Z",
		"age": 11
	},
	"phone": "902-795-193",
	"cell": "610-788-943",
	"id": {
		"name": "DNI",
		"value": "67065615-K"
	},
	"picture": {
		"large": "https://randomuser.me/api/portraits/men/34.jpg",
		"medium": "https://randomuser.me/api/portraits/med/men/34.jpg",
		"thumbnail": "https://randomuser.me/api/portraits/thumb/men/34.jpg"
	},
	"nat": "ES"
};