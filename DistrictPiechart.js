
		var udayapurCo = [
				{
					value: 390,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 41207,
					color: "#FFE87C",
					highlight: "#808000",
					label: "Firewood"
				},
				{
					value: 2101,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 5015,
					color: "#6CBB3C",
					highlight: "#808000",
					label: "LP Gas"
				},
				{
					value: 70462,
					color: "#C58917",
					highlight: "#808000",
					label: "Cowdung"
				},
				{
					value: 1889,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];
			var udayapurEl = [
				{
					value: 277,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 66975,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 53812,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];
			var sunsariCo = [
				{
					value: 2988,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 57978,
					color: "#FFE87C",
					highlight: "#808000",
					label: "Firewood"
				},
				{
					value: 1936,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 46982,
					color: "#6CBB3C",
					highlight: "#808000",
					label: "LP Gas"
				},
				{
					value: 50288,
					color: "#C58917",
					highlight: "#808000",
					label: "Cowdung"
				},
				{
					value: 2107,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];
			var sunsariEl = [
				{
					value: 277,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 29986,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 132016,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];
			var sirahaCo = [
				{
					value: 248,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 43151,
					color: "#FFE87C",
					highlight: "#808000",
					label: "Firewood"
				},
				{
					value: 1202,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 4164,
					color: "#6CBB3C",
					highlight: "#808000",
					label: "LP Gas"
				},
				{
					value: 67616,
					color: "#C58917",
					highlight: "#808000",
					label: "Cowdung"
				},
				{
					value: 1548,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];
			var sirahaEl = [
				{
					value: 263,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 35604,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 82062,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];
			var saptariCo = [
				{
					value: 390,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 41207,
					color: "#FFE87C",
					highlight: "#808000",
					label: "Firewood"
				},
				{
					value: 2101,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 5015,
					color: "#6CBB3C",
					highlight: "#808000",
					label: "LP Gas"
				},
				{
					value: 70462,
					color: "#C58917",
					highlight: "#808000",
					label: "Cowdung"
				},
				{
					value: 1889,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];
			var saptariEl = [
				{
					value: 277,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 66975,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 53812,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];
			var morangCo = [
				{
					value: 8480,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 96037,
					color: "#FFE87C",
					highlight: "#808000",
					label: "Firewood"
				},
				{
					value: 2806,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 49769,
					color: "#6CBB3C",
					highlight: "#808000",
					label: "LP Gas"
				},
				{
					value: 52659,
					color: "#C58917",
					highlight: "#808000",
					label: "Cowdung"
				},
				{
					value: 4119,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];
			var morangEl = [
				{
					value: 705,
					color:"#347C27",
					highlight: "#808000",
					label: "Biogas"
				},
				{
					value: 47348,
					color: "#78C7C7",
					highlight: "#808000",
					label: "Kerosene"
				},
				{
					value: 165815,
					color: "#800000",
					highlight: "808000",
					label: "Others"
				}

			];

			function changeValues(district){
			
			if(district == "udaypur"){
				var ctx1 = document.getElementById("bio-cook").getContext("2d");
				window.myPie = new Chart(ctx1).Pie(udayapurCo);
				var ctx2 = document.getElementById("bio-elect").getContext("2d");
				window.myPie = new Chart(ctx2).Pie(udayapurEl);
			}
			if (district == "sunsari"){
				var ctx1 = document.getElementById("bio-cook").getContext("2d");
				window.myPie = new Chart(ctx1).Pie(sunsariCo);
				var ctx2 = document.getElementById("bio-elect").getContext("2d");
				window.myPie = new Chart(ctx2).Pie(sunsariEl);
			}
			if (district == "siraha"){
				var ctx1 = document.getElementById("bio-cook").getContext("2d");
				window.myPie = new Chart(ctx1).Pie(sirahaCo);
				var ctx2 = document.getElementById("bio-elect").getContext("2d");
				window.myPie = new Chart(ctx2).Pie(sirahaEl);
			}
			if (district == "saptari"){
				var ctx1 = document.getElementById("bio-cook").getContext("2d");
				window.myPie = new Chart(ctx1).Pie(saptariCo);
				var ctx2 = document.getElementById("bio-elect").getContext("2d");
				window.myPie = new Chart(ctx2).Pie(saptariEl);
			}
			if (district == "morang"){
				var ctx1 = document.getElementById("bio-cook").getContext("2d");
				window.myPie = new Chart(ctx1).Pie(morangCo);
				var ctx2 = document.getElementById("bio-elect").getContext("2d");
				window.myPie = new Chart(ctx2).Pie(morangEl);
			}

		};