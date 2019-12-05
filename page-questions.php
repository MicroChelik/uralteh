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
		    	<li class="breadcrumb-item"><a href="index.php">Для клиента</a></li>
	    		<li class="breadcrumb-item active" aria-current="page">Вопрос - ответ</li>
		 	</ol>
		</div>
	</div>

	<section class="first-section">
		<div class="container">
			<div class="row">
				<div class="col-12">
					<div class="h2-block d-flex justify-content-between">
						<h2>Гарантия</h2>
						<a data-fancybox data-animation-duration="700" data-src="#ask" href="javascript:;">
							<button class="redBtn">Задать вопрос</button>
						</a>
					</div>
				</div>
				<div class="col-12">
					<div id="accordion" class="accordion">
					  <div class="card">
					    <div class="card-header" id="headingOne">
					      <h5 class="mb-0">
					        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
					        	<img src="img/icons/accordion.svg">   Принимая во внимание показатели успешности, сплочённость команды профессионалов требует от нас анализа приоритизации разума над эмоциями.
					        </button>
					      </h5>
					    </div>

					    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
					      <div class="card-body">
					        Ясность нашей позиции очевидна: дальнейшее развитие различных форм деятельности способствует подготовке и реализации стандартных подходов. В целом, конечно, сплочённость команды профессионалов позволяет выполнить важные задания по разработке вывода текущих активов. Сложно сказать, почему акционеры крупнейших компаний.
					      </div>
					    </div>
					  </div>
					  <div class="card">
					    <div class="card-header" id="headingTwo">
					      <h5 class="mb-0">
					        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
					          	<img src="img/icons/accordion.svg">   Принимая во внимание показатели успешности, сплочённость команды профессионалов требует от нас анализа приоритизации разума над эмоциями.
					        </button>
					      </h5>
					    </div>
					    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
					      <div class="card-body">
					        Ясность нашей позиции очевидна: дальнейшее развитие различных форм деятельности способствует подготовке и реализации стандартных подходов. В целом, конечно, сплочённость команды профессионалов позволяет выполнить важные задания по разработке вывода текущих активов. Сложно сказать, почему акционеры крупнейших компаний.
					      </div>
					    </div>
					  </div>
					  <div class="card">
					    <div class="card-header" id="headingThree">
					      <h5 class="mb-0">
					        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
					        	<img src="img/icons/accordion.svg">   Принимая во внимание показатели успешности, сплочённость команды профессионалов требует от нас анализа приоритизации разума над эмоциями.
					        </button>
					      </h5>
					    </div>
					    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
					      <div class="card-body">
					        Ясность нашей позиции очевидна: дальнейшее развитие различных форм деятельности способствует подготовке и реализации стандартных подходов. В целом, конечно, сплочённость команды профессионалов позволяет выполнить важные задания по разработке вывода текущих активов. Сложно сказать, почему акционеры крупнейших компаний.
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		</div>
	</section>







<?php
	include('html-end.php');
?>