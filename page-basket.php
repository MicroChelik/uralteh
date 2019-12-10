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
	    		<li class="breadcrumb-item active" aria-current="page">Конструктор</li>
		 	</ol>
		</div>
	</div>

	<section class="first-section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="h2-block mt-3 mt-lg-0">
						<h2>Конструктор</h2>
					</div>
				</div>
			</div>

			<div class="row basket-product">
				<div class="col-lg-2 basket-product__image">
					<img src="img/basket1.webp" alt="Фото товара">
				</div>
				<div class="col-lg-3 basket-product__description">
					<div class="basket-product__name">
						<p>Название оборудования</p>
					</div>
					<div class="basket-product__info">
						<div>
							<p>
								Длина
							</p>
							<p>
								Грузоподъёмность
							</p>
							<p>
								Ширина
							</p>
						</div>
						<div class="basket-product__params">
							<p>
								Параметры
							</p>
							<p>
								Параметры
							</p>
							<p>
								Параметры
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 basket-product__description">
					<div class="basket-product__info">
						<div>
							<p>
								Длина
							</p>
							<p>
								Грузоподъёмность
							</p>
							<p>
								Ширина
							</p>
						</div>
						<div class="basket-product__params">
							<p>
								Параметры
							</p>
							<p>
								Параметры
							</p>
							<p>
								Параметры
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-auto basket-product__delete order-first order-lg-last">
					<div>
						<img src="img/icons/close.svg" alt="Удалить">
					</div>
				</div>
			</div>

			<div class="row basket-product">
				<div class="col-lg-2 basket-product__image">
					<img src="img/basket1.webp" alt="Фото товара">
				</div>
				<div class="col-lg-3 basket-product__description">
					<div class="basket-product__name">
						<p>Название оборудования</p>
					</div>
					<div class="basket-product__info">
						<div>
							<p>
								Длина
							</p>
							<p>
								Грузоподъёмность
							</p>
							<p>
								Ширина
							</p>
						</div>
						<div class="basket-product__params">
							<p>
								Параметры
							</p>
							<p>
								Параметры
							</p>
							<p>
								Параметры
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-3 basket-product__description">
					<div class="basket-product__info">
						<div>
							<p>
								Длина
							</p>
							<p>
								Грузоподъёмность
							</p>
							<p>
								Ширина
							</p>
						</div>
						<div class="basket-product__params">
							<p>
								Параметры
							</p>
							<p>
								Параметры
							</p>
							<p>
								Параметры
							</p>
						</div>
					</div>
				</div>
				<div class="col-lg-auto basket-product__delete order-first order-lg-last">
					<div>
						<img src="img/icons/close.svg" alt="Удалить">
					</div>
				</div>
			</div>

			<div class="row basket-order">
				<div class="col-lg-8 order-form">
					<div>
						<p class="title">оформить заявку</p>
					</div>
					<form class="order-form__form">
						<div class="order-form__inputs">
							<input type="text" placeholder="Имя *" required="">
							<input type="email" placeholder="Email *" required="">
							<input type="text" placeholder="Номер телефона *" required="">
							<input type="text" placeholder="Комментарий">
						</div>
						<div class="checkbox-div">
							<input type="checkbox" required="" class="checkbox" id="checkbox">
							<label for="checkbox"></label>
							<p>Я даю свое согласие на обработку <a href="" target="_blank">персональных данных</a></p>
						</div>
							<button class="redBtn">Отправить</button>
					</form>
				</div>
				<div class="col-lg-3 offset-lg-1 basket-image">
					<img src="img/basket2.webp" alt="Фотография">
				</div>
			</div>
			

		</div>
	</section>





<?php
	include('html-end.php');
?>