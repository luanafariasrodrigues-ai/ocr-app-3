import os
from flask import Flask, render_template

app = Flask(__name__, template_folder='templates')

@app.route('/')
def home():
    # Dados que o JavaScript e o HTML vão usar
    stats = [
        {"value": "1.200+", "label": "Projetos"},
        {"value": "450+", "label": "Condomínios"},
        {"value": "98%", "label": "Satisfação"},
        {"value": "15+", "label": "Anos Exp."}
    ]
    return render_template('index.html', stats=stats)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
