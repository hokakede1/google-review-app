const { bcryptHarshing, comparePassword } = require('../helpers/authenticationHelpers');

test('password hashing function return back a string', async () => {
	const expectedPassword = await bcryptHarshing('1234567');
	expect(typeof expectedPassword).toMatch('string');
});

test('the password has to be hashed', async () => {
	const expectedPassword = await bcryptHarshing('1234567');
	expect(expectedPassword.length > 30).toBe(true);
});

test("send in right password", async() => {
    const password = await bcryptHarshing('1234567');
    const predictedResult = comparePassword(password, "1234567", (err, isMatch) => {
        expect(isMatch).toBe(true)
    })
})

test("send in wrong password", async() => {
    const password = await bcryptHarshing('1234567');
    const predictedResult = comparePassword(password, "123467", (err, isMatch) => {
        expect(isMatch).toBe(false)
    })
})
