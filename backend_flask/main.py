from flask import Flask
from flask_restful import Api, Resource
from random import choice

app = Flask(__name__)
api = Api(app)

tosts_list = []
with open("tosts.txt", "r", encoding="utf-8") as f:
    data = f.read()
    tosts_list = data.split("\n")


class Tost(Resource):
    def get(self):
        rand_e = choice(tosts_list)
        rand_e = rand_e.replace("<br/>", "")

        return {"tost": rand_e}


api.add_resource(Tost, "/api/tost/")


def main():
    app.run(debug=True)


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=8050)
