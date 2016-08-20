var ctx1 = document.getElementById("clientChart");
var clientChart = new Chart(ctx1, {

    type: "radar",
    data: {
        labels: ["基准线","jQuery", "CSS/CSS3", "Html5", "Bootstrap", "Javascript"],
        datasets: [
            {
                label: "前端技能",
                backgroundColor: "rgba(231, 5, 15,0.2)",
                borderColor: "rgba(231, 5, 15,1)",
                pointBackgroundColor: "rgba(231, 5, 15,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(231, 5, 15,1)",
                data: [6.0,3.0, 3.0, 3.0, 3.0, 3.5]
            }
        ]
    },
    options: {
        scale: {
            reverse: false,
            ticks: {
                beginAtZero: true
            }
        }
    }
});

var ctx2 = document.getElementById("serverChart");
var serverChart = new Chart(ctx2, {
    type: "radar",
    data: {
        labels: ["基准线","Java SE", "Spring", "Struts2", "Spring mvc", "Hibernate","Mybatis"],
        datasets: [
            {
                label: "后端技能",
                backgroundColor: "rgba(231, 157, 20,0.2)",
                borderColor: "rgba(231, 157, 20,1)",
                pointBackgroundColor: "rgba(231, 157, 20,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(231, 157, 20,1)",
                data: [6.0,5.0, 4.5, 4.0, 3.5, 3.5,4.0]
            }
        ]
    },
    options: {
        scale: {
            reverse: false,
            ticks: {
                beginAtZero: true
            }
        }
    }
});

var ctx3 = document.getElementById("dbChart");
var dbChart = new Chart(ctx3, {
    type: "radar",
    data: {
        labels: ["基准线","Oracle", "MySQL", "PostgerSQL", "Redis", "MongoDB"],
        datasets: [
            {
                label: "数据库技能",
                backgroundColor: "rgba(214, 205, 26,0.2)",
                borderColor: "rgba(214, 205, 26,1)",
                pointBackgroundColor: "rgba(214, 205, 26,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(214, 205, 26,1)",
                data: [6.0,4.5, 3.5, 3.5, 4.0, 3.0]
            }
        ]
    },
    options: {
        scale: {
            reverse: false,
            ticks: {
                beginAtZero: true
            }
        }
    }
});

var ctx4 = document.getElementById("toolChart");
var toolChart = new Chart(ctx4, {
    type: "radar",
    data: {
        labels: ["基准线","Maven", "Git", "SVN", "Eclipse", "Linux"],
        datasets: [
            {
                label: "工具技能",
                backgroundColor: "rgba(48, 186, 16,0.2)",
                borderColor: "rgba(48, 186, 16,1)",
                pointBackgroundColor: "rgba(48, 186, 16,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(48, 186, 16,1)",
                data: [6.0,4.0, 4.0, 4.0, 5.0, 3.5]
            }
        ]
    },
    options: {
        scale: {
            reverse: false,
            ticks: {
                beginAtZero: true
            }
        }
    }
});

var ctx5 = document.getElementById("otherChart");
var otherChart = new Chart(ctx5, {
    type: "radar",
    data: {
        labels: ["基准线","Thrift", "gRPC", "Dubbo", "Zookeeper", "Kafka","Hadoop"],
        datasets: [
            {
                label: "其他技能",
                backgroundColor: "rgba(60, 93, 170,0.2)",
                borderColor: "rgba(60, 93, 170,1)",
                pointBackgroundColor: "rgba(60, 93, 170,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(60, 93, 170,1)",
                data: [6.0,3.5, 3.5, 1.5, 2.0, 1.5,2.0]
            }
        ]
    },
    options: {
        scale: {
            reverse: false,
            ticks: {
                beginAtZero: true
            }
        }
    }
});