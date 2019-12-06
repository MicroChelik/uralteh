<?php
	include('html-start.php');
?>
<?php
	include('header.php');
?>
	
	<div aria-label="breadcrumb" class="breadcrumbNav">
		<div class="container px-0">
			<ol class="breadcrumb">
		    	<li class="breadcrumb-item"><a href="index.php">Главная</a></li>
	    		<li class="breadcrumb-item active" aria-current="page">Контакты</li>
		 	</ol>
		</div>
	</div>

	<section>
		<div class="container">
			<div class="row">
				<div class="col-12 mt-3 mt-lg-0">
					<h2 class="mb-5">контакты</h2>
				</div>
			</div>
			<div class="row contacts mb-5">
				<div class="col-lg-3">
					<p class="title">Адрес:</p>
					<p>426039, Россия, УР, г. Ижевск, ул. Воткинское шоссе, 192.</p>
				</div>
				<div class="col-lg-3">
					<p class="title">Телефон:</p>
					<p><a href="tel:(3412) 600-999">(3412) 600-999</a> <br><a href="tel:8 (800) 100-53-83">8 (800) 100-53-83</a></p>
				</div>
				<div class="col-lg-3">
					<p class="title">Email:</p>
					<p><a href="mailto:manager@uralteh.ru">manager@uralteh.ru</a></p>
				</div>
				<div class="col-lg-3">
					<div class="additional-header_social">
						<a href="">
							<img src="img/icons/skype.svg">
						</a>
						<a href="">
							<img src="img/icons/whatsapp.svg">
						</a>
						<a href="">
							<img src="img/icons/viber.svg">
						</a>
						<a href="">
							<img src="img/icons/inst.svg">
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>


	<section class="section-form">
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-6 map px-0">
					<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Aea1c0e37423efb97d41d5a63dfb1f47e0d35bf889bd4917c45b9a54eb18cb3e2&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"></script>
				</div>
				<div class="col-lg-6 section-form__background">
					<form class="section-form__form">
						<h2>Написать нам</h2>
						<input type="text" placeholder="Имя *" required="" name="">
						<input type="tel" placeholder="Номер телефона *" required="" name="">
						<input type="email" placeholder="Email *" required="" name="">
						<input type="text" placeholder="Комментарий" required="" name="">
						<div class="checkbox-div">
							<input type="checkbox" required="" class="checkbox" name="" id="checkbox">
							<label for="checkbox"></label>
							<p>Я даю свое согласие на обработку <br> <a href="" target="_blank">персональных данных</a></p>
						</div>
						<button class="redBtn">Отправить</button>
					</form>
				</div>
			</div>
		</div>
	</section>



<?php
	include('html-end.php');
?>