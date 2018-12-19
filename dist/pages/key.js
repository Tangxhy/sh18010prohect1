        var searchInput = document.getElementsByClassName("searchInput")[0];
		var droplist = document.getElementsByClassName("droplist")[0];
		searchInput.addEventListener("input", function() {
			console.log(this.value);


			var _script = document.createElement("script");
			_script.src = `http://suggestion.baidu.com/?wd=${this.value}&cb=callback`;
			document.body.appendChild(_script);


		});

		function callback(data) {
			console.log(data.s);
			droplist.innerHTML = "";

			data.s.forEach(item => {
				var li = document.createElement("li");
				li.innerText = item;
				droplist.appendChild(li);
			});

			droplist.style.display = "block";

		}