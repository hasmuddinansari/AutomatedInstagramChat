# download selenium
# pip install selenium

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import selenium.common.exceptions
import time

# Login Credentials
username = 'put your username here'
password = 'put your password here'

recipient = input('Enter username of user whome you want to send message : ')

url = 'https://instagram.com/' + recipient


def path():
    global chrome

    # local path of chromedriver
    # download from https://sites.google.com/a/chromium.org/chromedriver/downloads

    chrome = webdriver.Chrome("/home/ayaan/Desktop/driver/chromedriver")


def url_name(url):
    chrome.get(url)

    # adjust sleep if you want`
    time.sleep(4)


def login(username, your_password):
    findAndClick('L3NKy', 4)

    # finds the username box
    usern = chrome.find_element_by_name("username")

    # sends the entered username
    usern.send_keys(username)

    # finds the password box
    passw = chrome.find_element_by_name("password")

    # sends the entered password
    passw.send_keys(your_password)

    # press enter after sending password
    passw.send_keys(Keys.RETURN)
    time.sleep(5.5)

    # Finding Not Now button
    findAndClick('yWX7d', 3)


def findAndClick(className, duration):
    try:
        element = chrome.find_element_by_class_name(className)
        element.click()
        time.sleep(duration)
    except:
        return 1


def send_message():
    findAndClick('_8A5w5 ', 4)
    findAndClick('sqdOP ', 2)
    findAndClick('HoLwm ', 3)
    for _ in range(50):
        messageBox = chrome.find_element_by_tag_name('textarea')
        messageBox.send_keys('message to send')
        messageBox.send_keys(Keys.RETURN)


path()
time.sleep(1)
url_name(url)
login(username, password)
send_message()
chrome.close()
