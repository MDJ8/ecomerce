const observer = new IntersectionObserver((entries)=>
    {
        entries.forEach((entry) =>
        {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    });
    const hiddenElements=document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));





    const observers = new IntersectionObserver((entries)=>
        {
            entries.forEach((entry) =>
            {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show2');
                } else {
                    entry.target.classList.remove('show2');
                }
            });
        });
        const hiddenElementss=document.querySelectorAll('.hidden2');
        hiddenElementss.forEach((el) => observers.observe(el));






        const observers3 = new IntersectionObserver((entries)=>
            {
                entries.forEach((entry) =>
                {
                    console.log(entry)
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show3');
                    } else {
                        entry.target.classList.remove('show3');
                    }
                });
            });
            const hiddenElementss3=document.querySelectorAll('.hidden3');
            hiddenElementss3.forEach((el) => observers3.observe(el));
    



    const observers4 = new IntersectionObserver((entries)=>
        {
            entries.forEach((entry) =>
            {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show4');
                } else {
                    entry.target.classList.remove('show4');
                }
            });
        });
        const hiddenElementss4=document.querySelectorAll('.hidden4');
        hiddenElementss4.forEach((el) => observers4.observe(el));


