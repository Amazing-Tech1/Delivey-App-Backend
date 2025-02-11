async function handleLogout(req, res) {
    const accessToken = req.cookies.accessToken
    const refreshToken = req.cookies.refreshToken

    if (!accessToken && !refreshToken) return res.status(401).json({ message: 'No active session found' })

    if (accessToken) {
        res.clearCookie('accessToken', {
            httpOnly: true,
            sameSite: 'None',
            secure: true
        })
    }
    if (refreshToken) {
        res.clearCookie('refreshToken', {
            httpOnly: true,
            sameSite: 'None',
            secure: true
        })
    }

    res.status(200).json({ success: true })

}
module.exports = handleLogout