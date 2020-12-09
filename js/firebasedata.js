function detail(N) {
    var Text = "one shot"
    var C = 0;
    var db = firebase.firestore();
    db.collection("manga").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                var number = `${doc.data().N}`
                var card = ` <img src="${doc.data().Poster}" width="100%">
                    <B>${doc.data().Name}</B>
                    <p>
                        ${doc.data().Detail}
                    </p>
                    <button type="button" class="btn btn-danger" onclick="Addremove(${doc.data().N})">
                    <div class="row">
                      &nbsp&nbsp
                    <ons-icon icon="md-favorite" size="40px"></ons-icon>
                    <h2>&nbspFavorite&nbsp&nbsp</h2>
                    </div>
                    </button>
                    `;
                    if(Number(N) === Number(number)){
                      $("#D").append(card);
                    }if(number.toLowerCase().indexOf(Text.toLowerCase()) == -1){
                        var chapter = `<option value="${doc.data().chapter}">ตอนที่ ${doc.data().chapter}</option>`
                        $("#select").append(chapter);
                        console.log(chapter);
                        console.log(1)
                    }
                    else if(Number(N) === Number(number)){
                        var chapter = `<option value="${doc.data().chapter}">ตอนที่ ${doc.data().chapter}</option>`
                        $("#select").append(chapter);
                        console.log(chapter);
                        console.log(2)
                    }
            });
        })
  }