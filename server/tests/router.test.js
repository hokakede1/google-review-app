const axios = require('axios');
const config = require('../config');
const chai = require('chai');
const server = require('../index');

// test('We can lunch a browser', async () => {
// 	const browser = await puppeteer.launch({
// 		headless: false
// 	});
// 	const page = await browser.newPage();
// 	await page.goto('https://www.google.com/');
// 	const content = await page.content();
// 	console.log(content);
// 	browser.close();
// })

describe('Authentication Routes', () => {
	const url = config.rootUrl;
	const mockUserAcc = {
		firstName: 'Test',
		lastName: 'Test',
		email: 'testing@test.com',
		profilePic: 'test.com',
		location: 'Lehi',
		password: 'test'
	};
	it('able to sign up an user', async () => {});
	it('able to dected used email', async () => {});
	it('able to block request without all info', async () => {});
	it('able to sign in', async () => {
		// const user = {
		// 	email: 'hqdang87@gmail.com',
		// 	password: '1234567'
		// };
		// // const resultFromSignIn = await axios.post(`${url}/signin`, user);
		// expect(resultFromSignIn).toHaveProperty('token');

		// chai.request(server)
		// .post('/book')
		// .end((err, res) => {
		// 	res.should.have.status(200);
		// 	res.body.should.be.a('array');
		// 	res.body.length.should.be.eql(0);
		//   done();
	});
});
