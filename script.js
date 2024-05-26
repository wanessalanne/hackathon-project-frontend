const modal = document.getElementById("modal-form");
const btn = document.getElementById("openModalBtn");
const span = document.querySelector(".close");
const modalOverlay = document.querySelector(".modal-overlay");
const form = document.getElementById("inputForm");
const modalSucess = document.getElementById("modalSucess");
let files;

// Abre o modal ao clicar no botão
btn.onclick = function () {
    document.getElementById("playerReported").selectedIndex = 0;
    document.getElementById("typeReported").selectedIndex = 0,
    document.getElementById("description").value = "",
    document.getElementById("otherTypeReported").selectedIndex = 0;
    modalSucess.style.display = 'none';    
    modal.style.display = "flex";
    form.style.display = 'block';    
};

// Fecha o modal ao clicar no botão de fechar
span.onclick = function () {
    modal.style.display = "none";
};

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
    if (event.target === modalOverlay) {
        modal.style.display = "none";
    }
};

//send attachment button function
document.getElementById("fileInput").addEventListener("change", function () {
    if (this.files.length > 0) {
      console.log("Arquivo selecionado:", this.files[0].name);
      files = this.files;
    }
  });

// Event listener para enviar o formulário
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const url = 'http://localhost:1337/api/reports';
    const data = {
        "data": {
            "playerReported": document.getElementById("playerReported").value,
            "typeReported": document.getElementById("typeReported").value,
            "description": document.getElementById("description").value,
            "otherTypeReported": document.getElementById("otherTypeReported").value
        }
};

const requestOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
};

fetch(url, requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Não foi possível fazer a denúncia');
        }
        return response.json();
    })
    .then(data => {
        console.log('Requisição enviada com sucesso:', data);
        form.style.display = 'none';
        modalSucess.style.display = 'block';
        const formdata = new FormData();
        formdata.append("ref", "api::report.report");
        formdata.append("refId", data.data.id);
        formdata.append("field", "attachments");
        formdata.append("files", files[0]);
        console.log(files);
        console.log(data.data.id);
        console.log(formdata);

        const requestOptions = {
        method: "POST",
        body: formdata,
        redirect: "follow"
        };

        fetch("http://localhost:1337/api/upload", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));        
            })    
            .catch(error => {
                console.error('Erro no servidor', error);
            });
    
});

// Event listener para o botão "Retornar ao jogo"
returnBtn.addEventListener("click", function () {
    modal.style.display = "none";
});



let recorder;
        const startRecordingBtn = document.getElementById('startRecording');
        const stopRecordingBtn = document.getElementById('stopRecording');

        // Função para iniciar a gravação
        function startRecording() {
            navigator.mediaDevices.getDisplayMedia({ video: true, audio: true })
                .then(function (stream) {
                    recorder = RecordRTC(stream, {
                        type: 'video',
                        mimeType: 'video/webm'
                    });
                    recorder.startRecording();
                    startRecordingBtn.disabled = true;
                    stopRecordingBtn.disabled = false;
                })
                .catch(function (error) {
                    console.error('Erro ao obter acesso à tela:', error);
                });
        }

        // Função para parar a gravação e baixar o vídeo
        function stopRecording() {
            recorder.stopRecording(function () {
                let blob = recorder.getBlob();
                let url = URL.createObjectURL(blob);

                // Cria um link para download
                let a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'screen-recording.webm';
                document.body.appendChild(a);
                a.click();
                setTimeout(function () {
                    document.body.removeChild(a);
                    window.URL.revokeObjectURL(url);
                }, 100);

                // Limpa a gravação
                recorder = null;
                startRecordingBtn.disabled = false;
                stopRecordingBtn.disabled = true;
            });
        }

        // Eventos dos botões
        startRecordingBtn.addEventListener('click', startRecording);
        stopRecordingBtn.addEventListener('click', stopRecording);