from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    # Aqui simulamos os dados que estavam no React
    stats = [
        {"icon": "file-text", "label": "Projetos Aprovados", "value": "1.200+"},
        {"icon": "building", "label": "Condomínios Seguros", "value": "450+"},
        {"icon": "users", "label": "Clientes Satisfeitos", "value": "98%"},
        {"icon": "clock", "label": "Anos de Experiência", "value": "15+"}
    ]
    return render_template('index.html', stats=stats)

if __name__ == '__main__':
    app.run(debug=True)
