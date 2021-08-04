function login() {
                window.location.href = "logingoogle.html"
    }


function Register(e) {
            e.preventDefault();

            let formdata = {
                name: document.getElementById("input1").value,
                email: document.getElementById("input2").value,
                password: document.getElementById("input3").value,
                username: document.getElementById("input4").value,
                mobile: document.getElementById("input5").value,
                description: document.getElementById("input6").value,
            };

            // console.log("formdata:", formdata);

            formdata = JSON.stringify(formdata)
            console.log("formdata:", formdata);
            fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
                
                method: "POST",

                body: formdata, 

                headers: {
                    'Content-Type': "application/json",
                },
            })
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    console.log("res:", res);
                })
                .catch((err) => {
                    console.log("err:", err)
                });
}
        function Login(e){

        e.preventDefault();

        let formdata = {
            username: document.getElementById("input7").value,
            password: document.getElementById("input8").value,
        };
        let body = JSON.stringify(formdata)
        // console.log("formdata:", formdata);
        fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
            method: "POST",

            body: body,

            request: 'no-cors',
            // additional info

            headers: {
                'Content-Type': "application/json",
            },
        })
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log("res:", res);

                let u = formdata.username;
                let t = res.token;
                getmyprof(u, t)
            })
            .catch((err) => {
                console.log("err:", err)
            });
    }

    function getmyprof(username, token){
        
        fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`, {
            headers:{
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log("res:", res);
            })
            .catch((err) => {
                console.log("err:", err)
            });
    }