$(function() {
	// We use an inline data source in the example, usually data would
	// be fetched from a server
	var data = [],
		totalPoints = 300;

	function getRandomData() {
		if (data.length > 0) data = data.slice(1);
		// Do a random walk
		while (data.length < totalPoints) {
			var prev = data.length > 0 ? data[data.length - 1] : 50,
				y = prev + Math.random() * 10 - 5;
			if (y < 0) {
				y = 0;
			} else if (y > 100) {
				y = 100;
			}
			data.push(y);
		}
		var res = [];
		for (var i = 0; i < data.length; ++i) {
			res.push([i, data[i]])
		}
		return res;
	}
	var updateInterval = 30;
	$("#updateInterval").val(updateInterval).change(function() {
		var v = $(this).val();
		if (v && !isNaN(+v)) {
			updateInterval = +v;
			if (updateInterval < 1) {
				updateInterval = 1;
			} else if (updateInterval > 2000) {
				updateInterval = 2000;
			}
			$(this).val("" + updateInterval);
		}
	});
	var plot = $.plot("#placeholder4", [getRandomData()], {
		series: {
			shadowSize: 0 // Drawing is faster without shadows
		},
		grid: {
			borderColor: "rgba(167, 180, 201,.1)",
		},
		colors: ["#05a01f"],
		yaxis: {
			min: 0,
			max: 100,
			tickLength: 0
		},
		xaxis: {
			tickLength: 0,
			show: false
		}
	});

	function update() {
		plot.setData([getRandomData()]);
		plot.draw();
		setTimeout(update, updateInterval);
	}
	update();
});
$(function(e) {
	/* chartjs (#purchase) */
	var myCanvas = document.getElementById("purchase");
	myCanvas.height = "260";
	var myCanvasContext = myCanvas.getContext("2d");
	var gradientStroke1 = myCanvasContext.createLinearGradient(0, 0, 0, 380);
	gradientStroke1.addColorStop(0, 'rgb(5, 160, 31,0.3)');
	var gradientStroke2 = myCanvasContext.createLinearGradient(0, 0, 0, 280);
	gradientStroke2.addColorStop(0, 'rgb(231, 42, 26,0.3)');
	var myChart = new Chart(myCanvas, {
		type: 'line',
		data: {
			labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
			type: 'line',
			datasets: [{
				label: 'raw material',
				data: [16, 32, 18, 26, 42, 33, 44],
				backgroundColor: gradientStroke1,
				borderColor: '#05a01f',
				pointBackgroundColor: '#05a01f',
				pointHoverBackgroundColor: gradientStroke1,
				pointBorderColor: '#05a01f',
				pointHoverBorderColor: gradientStroke1,
				pointBorderWidth: 3,
				pointRadius: 3,
				pointHoverRadius: 2,
				borderWidth: 2
			}, {
				label: "manufactured material",
				data: [22, 44, 67, 43, 76, 45, 50],
				backgroundColor: gradientStroke2,
				borderColor: '#e72a1a ',
				pointBackgroundColor: '#e72a1a',
				pointHoverBackgroundColor: gradientStroke2,
				pointBorderColor: '#e72a1a ',
				pointHoverBorderColor: gradientStroke2,
				pointBorderWidth: 3,
				pointRadius: 3,
				pointHoverRadius: 2,
				borderWidth: 2
			}]
		},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			tooltips: {
				mode: 'index',
				titleFontSize: 12,
				titleFontColor: '#000',
				bodyFontColor: '#000',
				backgroundColor: '#fff',
				cornerRadius: 3,
				intersect: false,
			},
			legend: {
				display: true,
				labels: {
					usePointStyle: false,
				},
			},
			scales: {
				xAxes: [{
					ticks: {
						fontColor: "#605e7e",
					},
					display: true,
					gridLines: {
						display: true,
						color: 'rgba(96, 94, 126, 0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'Month',
						fontColor: 'transparent'
					}
				}],
				yAxes: [{
					ticks: {
						fontColor: "#605e7e",
					},
					display: true,
					gridLines: {
						display: true,
						color: 'rgba(96, 94, 126, 0.1)',
						drawBorder: false
					},
					scaleLabel: {
						display: false,
						labelString: 'sales',
						fontColor: 'transparent'
					}
				}]
			},
			title: {
				display: false,
				text: 'Normal Legend'
			}
		}
	});
});
/* chartjs (#purchase) closed */
$(function(e) {
	var chartdata3 = [{
		name: 'Good',
		type: 'bar',
		stack: 'Stack',
		data: [20, 56, 18, 75, 65, 74, 78, 67, 84]
	}, {
		name: 'Bad',
		type: 'bar',
		stack: 'Stack',
		data: [12, 14, 15, 50, 24, 24, 10, 20, 30]
	}];
	var option5 = {
		grid: {
			top: '6',
			right: '0',
			bottom: '17',
			left: '25',
		},
		tooltip: {
			show: true,
			showContent: true,
			alwaysShowContent: true,
			triggerOn: 'mousemove',
			trigger: 'axis',
			axisPointer: {
				label: {
					show: false,
				}
			}
		},
		xAxis: {
			data: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
			axisLine: {
				lineStyle: {
					color: 'rgba(227, 237, 252,0.5)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#a7b4c9'
			}
		},
		yAxis: {
			splitLine: {
				lineStyle: {
					color: 'rgba(227, 237, 252,0.5)'
				}
			},
			axisLine: {
				lineStyle: {
					color: 'rgba(227, 237, 252,0.5)'
				}
			},
			axisLabel: {
				fontSize: 10,
				color: '#a7b4c9'
			}
		},
		series: chartdata3,
		color: ['#05a01f', '#e72a1a '],
		barMaxWidth: 10
	};
	var chart5 = document.getElementById('echart5');
	var barChart5 = echarts.init(chart5);
	barChart5.setOption(option5);
});