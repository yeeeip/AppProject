import requests
from bs4 import BeautifulSoup

BASE = "https://pozdravok.com/toast/prazdnik/noviy-god/"
PAGES = 10

with open("tosts.txt", "w") as f:
    for i in range(2, PAGES+1):
        r = requests.get(url=BASE + str(i) + '.htm')
        soup = BeautifulSoup(r.text, 'html.parser')
        content = soup.find('div', id='main').find('div', class_='content')
        paras = content.find_all('p')
        for p in paras:
            ins = p.contents
            st = ''
            for a in ins:
                st += str(a)
            f.write(st + '\r\n')
