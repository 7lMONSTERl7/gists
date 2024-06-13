async register(registerData) {
        const username = registerData.username
        const password = registerData.password
        if (!username || !password){
            alert('username or password is empty')
            return
        }
        const email = registerData.email
        const userImg = registerData.profile_img
        const userCover = registerData.cover_img
        const bio = registerData.bio
        const formData = new FormData()
        formData.append('username', username)
        formData.append('password', password)
        formData.append('email', email)
        formData.append('user_img', userImg)
        formData.append('cover', userCover)
        formData.append('bio', bio)

        const res = await fetch(`${this.url}/api/register/`, {
            method: 'POST',
            body: formData
        })
        const data = await res.json()
        alert(data.message)
    }
