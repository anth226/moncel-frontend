FROM alpine

RUN apk update
RUN apk add py3-pip
RUN apk add py3-setuptools
RUN apk add py3-enchant
RUN apk add aspell-en

ADD . /next-fts
WORKDIR /next-fts
RUN pip3 install -r requirements.txt
