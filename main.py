#!bin/usr/env python

import webapp2
import os
import random
import jinja2


jinja_current_directory = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class PlayingTileHandler(webapp2.RequestHandler):
    def get(self):
        tile_template = jinja_current_directory.get_template('index.html')
        self.response.write(tile_template.render())

class WelcomeHandler(webapp2.RequestHandler):
    def get(self):
        tile_template = jinja_current_directory.get_template('welcome.html')
        self.response.write(tile_template.render())
#the route mapping
app = webapp2.WSGIApplication([
    #this line routes the main url ('/')  - also know as
    ('/', WelcomeHandler),
    ('/tiles', PlayingTileHandler),
    ], debug=True)
