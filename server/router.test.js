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
	it.skip('able to sign up an user', async () => {});
	it.skip('able to dected used email', async () => {});
	it.skip('able to block request without all info', async () => {});
	it.skip('able to sign in', async () => {});
});
